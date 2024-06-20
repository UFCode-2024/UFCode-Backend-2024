const LanguageModel = require('../models/Language')
const view = require('../views/Language')

module.exports.createLanguage = (req, res) => {
    let Language = req.body
    let promise = LanguageModel.create(Language)
        
    promise.then((Language)=>{
        res.status(201).json(view.render(Language))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
}

module.exports.listLanguage = (req, res) => {
    let promise = LanguageModel.find().exec()

    promise.then((Language)=>{
        res.status(200).json(view.renderMany(Language))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.updateLanguage = (req, res) => {
    console.log("ta rodando isso aqui?")
    let id = req.params.id
    let body = req.body
    let promise = LanguageModel.findByIdAndUpdate(id, body, {new: true}).exec()
    promise.then((Language) => {
        res.status(200).json(view.render(Language))
    }).catch((error) => {
        res.status(400).json({ message: "Language not found", error: error })
    }
    )
}

module.exports.findLanguage = (req, res) => {
    let id = req.params.id
    let promise = LanguageModel.findById(id).exec()

    promise.then((Language)=>{
        res.status(200).json(view.render(Language))
    }).catch((error)=>{
            res.status(404).json({message: "Language not found", error: error})
        }
    )
}

module.exports.deleteLanguage = (req, res) => {
    let id = req.params.id
    let promise = LanguageModel.findByIdAndDelete(id).exec()

    promise.then((Language)=>{
        res.status(200).json(view.render(Language))
    }).catch((error)=>{
            res.status(400).json({message: "Language not found", error: error})
        }
    )
}