const DifficultyModel = require('../models/Difficulty')
const view = require('../views/Difficulty')
 
 module.exports.createDifficulty = (req, res) => {
    let difficulty = req.body
    let promise = DifficultyModel.create(difficulty)
    
    
    promise.then((difficulty)=>{
        res.status(201).json(view.render(difficulty))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listDifficulty = (req, res) => {
    let promise = DifficultyModel.find().exec()
    promise.then((difficulty)=>{
        res.status(200).json(view.renderMany(difficulty))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.updateDifficulty = (req, res) => {
    console.log("ta rodando isso aqui?")
    let id = req.params.id
    let body = req.body
    let promise = DifficultyModel.findByIdAndUpdate(id, body, {new: true}).exec()
    promise.then((Difficulty) => {
        res.status(200).json(view.render(Difficulty))
    }).catch((error) => {
        res.status(400).json({ message: "Difficulty not found", error: error })
    }
    )
}

module.exports.findDifficulty = (req, res) => {
    let id = req.params.id
    let promise = DifficultyModel.findById(id).exec()
    promise.then((difficulty)=>{
        res.status(200).json(view.render(difficulty))
    }).catch((error)=>{
            res.status(404).json({message: "difficulty not found", error: error})
        }
    )
}

module.exports.deleteDifficulty = (req, res) => {
    let id = req.params.id
    let promise = DifficultyModel.findByIdAndDelete(id).exec()
    promise.then((difficulty)=>{
        res.status(200).json(view.render(difficulty))
    }).catch((error)=>{
            res.status(400).json({message: "difficulty not found", error: error})
        }
    )
}