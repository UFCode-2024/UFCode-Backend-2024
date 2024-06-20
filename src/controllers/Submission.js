const SubmissionModel = require('../models/Submission')
const Problem = require('../models/Problem')
const view = require('../views/Submission')
const submissionCodeHandler = require('../utils/SubmissionCodeHandler')
const validationHandler = require('../utils/OutputValidator')
const fileHandler = require('../utils/SubmissionFileHandler')

module.exports.createSubmission = async (req, res) => {

    const submissionBody = req.body
    const problem = await Problem.findById(submissionBody.problem_id)
    const fileName = `${submissionBody.problem_id}-${submissionBody.student_id}.py`

    const filePath = await fileHandler.create(fileName, submissionBody.codeInput)

    async function handleSubmissionError(error) {
        const createdSubmission = await SubmissionModel.create({
            id_problem: submissionBody.problem_id,
            id_language: submissionBody.language_id,
            codeInput: filePath,
            result: false,
            error: error
        })

        res.status(400).json(view.render(createdSubmission))
    }

    async function handleSubmissionSuccess(success) {
        // Verificação da resposta do desafio 
        
        while(success.search('\r\n') > 0){
            success = success.replace('\r\n', '\n')
        }

        const resultValidation = await validationHandler(success, problem.expectedOutput)

        let createdSubmission
        if (resultValidation) {
            createdSubmission = await SubmissionModel.create({
                id_problem: submissionBody.problem_id,
                id_language: submissionBody.language_id,
                codeInput: filePath,
                result: resultValidation,
                error: false
            })
        } else {
            createdSubmission = await SubmissionModel.create({
                id_problem: submissionBody.problem_id,
                id_language: submissionBody.language_id,
                codeInput: filePath,
                result: resultValidation,
                error: "sua saída: " + success + "\nsaída esperada: " + problem.expectedOutput + "\nDiferença na saída exibida pelo programa com a saída esperada. \ndica, lembre-se de colocar somente input()"
            })
        }

        res.json(view.render(createdSubmission))
    }

    submissionCodeHandler(filePath, problem.input,
        handleSubmissionError, handleSubmissionSuccess)

}

module.exports.listSubmission = (req, res) => {


    let promise = SubmissionModel.find().exec()

    promise.then((Submission) => {
        res.status(200).json(view.renderMany(Submission))
    }).catch((error) => {
        res.status(400).json({ message: "error message", error: error })
    })
}

module.exports.findSubmission = (req, res) => {
    let id = req.params.id
    let promise = SubmissionModel.findById(id).exec()

    promise.then((Submission) => {
        res.status(200).json(view.render(Submission))
    }).catch((error) => {
        res.status(404).json({ message: "Submission not found", error: error })
    }
    )
}

module.exports.deleteSubmission = (req, res) => {
    let id = req.params.id
    let promise = SubmissionModel.findByIdAndDelete(id).exec()

    promise.then((Submission) => {
        res.status(200).json(view.render(Submission))
    }).catch((error) => {
        res.status(400).json({ message: "Submission not found", error: error })
    }
    )
}