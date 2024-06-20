const HouseModel = require('../models/House')
const view = require('../views/House')
 
 module.exports.createHouse = (req, res) => {
    let house = req.body
    let promise = HouseModel.create(house)
    
    
    promise.then((house)=>{
        res.status(201).json(view.render(house))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listHouse = (req, res) => {
    let promise = HouseModel.find().exec()
    promise.then((house)=>{
        res.status(200).json(view.renderMany(house))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findHouse = (req, res) => {
    let id = req.params.id
    let promise = HouseModel.findById(id).exec()
    promise.then((house)=>{
        res.status(200).json(view.render(house))
    }).catch((error)=>{
            res.status(404).json({message: "house not found", error: error})
        }
    )
}

module.exports.updateHouse = (req, res) => {
    console.log("ta rodando isso aqui?")
    let id = req.params.id
    let body = req.body
    let promise = HouseModel.findByIdAndUpdate(id, body, {new: true}).exec()
    promise.then((House) => {
        res.status(200).json(view.render(House))
    }).catch((error) => {
        res.status(400).json({ message: "House not found", error: error })
    }
    )
}


module.exports.deleteHouse = (req, res) => {
    let id = req.params.id
    let promise = HouseModel.findByIdAndDelete(id).exec()
    promise.then((house)=>{
        res.status(200).json(view.render(house))
    }).catch((error)=>{
            res.status(400).json({message: "house not found", error: error})
        }
    )
}