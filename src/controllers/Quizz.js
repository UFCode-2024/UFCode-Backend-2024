const QuizzModel = require('../models/Quizz')
const view = require('../views/Quizz')

module.exports.createQuizz = (req, res) => {
    let quizzBody = req.body
    let promise = QuizzModel.create(quizzBody)
        
    promise.then((quizzBody)=>{
        res.status(201).json(view.render(quizzBody))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
}

module.exports.listQuizz = (req, res) => {
    let promise = QuizzModel.find().populate("modules").exec()

    promise.then((quizzBody)=>{
        res.status(200).json(view.renderMany(quizzBody))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.updateQuizz = (req, res) => {
    console.log("ta rodando isso aqui?")
    let id = req.params.id
    let body = req.body
    let promise = QuizzModel.findByIdAndUpdate(id, body, {new: true}).exec()
    promise.then((Quizz) => {
        res.status(200).json(view.render(Quizz))
    }).catch((error) => {
        res.status(400).json({ message: "Quizz not found", error: error })
    }
    )
}

module.exports.findQuizz = (req, res) => {
    let id = req.params.id
    let promise = QuizzModel.findById(id).exec()

    promise.then((quizzBody)=>{
        res.status(200).json(view.render(quizzBody))
    }).catch((error)=>{
            res.status(404).json({message: "Quizz not found", error: error})
        }
    )
}

module.exports.deleteQuizz = (req, res) => {
    let id = req.params.id
    let promise = QuizzModel.findByIdAndDelete(id).exec()

    promise.then((quizzBody)=>{
        res.status(200).json(view.render(quizzBody))
    }).catch((error)=>{
            res.status(400).json({message: "Quizz not found", error: error})
        }
    )
}