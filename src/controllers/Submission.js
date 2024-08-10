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


    const caso_num = submissionBody.caso_num

    //funcao para obter cada caso de teste individual (nesse caso teremos 2 casos de teste por problema)
    function separarCasos(dados) {
        const linhas = dados.split('\n');
        const metade = Math.ceil(linhas.length / 2);
        const caso1 = linhas.slice(0, metade).join('\n');
        const caso2 = linhas.slice(metade).join('\n');
        return { caso1, caso2 };
      }


    //obtendo os dados de cada caso de teste
    const { caso1: input1, caso2: input2 } = separarCasos(problem.input);
    const { caso1: expOut1, caso2: expOut2 } = separarCasos(problem.expectedOutput);


    //organizando os dados
    const input = {
        1: input1,
        2: input2
      };

    const expOut = {
        1: expOut1,
        2: expOut2
    };
      

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

        const resultValidation = await validationHandler(success, expOut[caso_num])

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
                error: "entrada:\n" + input[caso_num] + "\n\nsua saída: " + success + "\nsaída esperada: " + expOut[caso_num] + "\nDiferença na saída exibida pelo programa com a saída esperada. \ndica, lembre-se de colocar somente input()"
            })
        }

        res.json(view.render(createdSubmission))
    }

    submissionCodeHandler(filePath, input[caso_num],
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