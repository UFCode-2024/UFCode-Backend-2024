const CourseModel = require('../models/Course')
const view = require('../views/Course')

module.exports.createCourse = (req, res) => {
    let course = req.body
    let promise = CourseModel.create(course)
        
    promise.then((course)=>{
        res.status(201).json(view.render(course))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
}

module.exports.listCourse = (req, res) => {
    let promise = CourseModel.find().exec()

    promise.then((course)=>{
        res.status(200).json(view.renderMany(course))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findCourse = (req, res) => {
    let id = req.params.id
    let promise = CourseModel.findById(id).exec()

    promise.then((course)=>{
        res.status(200).json(view.render(course))
    }).catch((error)=>{
            res.status(404).json({message: "course not found", error: error})
        }
    )
}

module.exports.deleteCourse = (req, res) => {
    let id = req.params.id
    let promise = CourseModel.findByIdAndDelete(id).exec()

    promise.then((course)=>{
        res.status(200).json(view.render(course))
    }).catch((error)=>{
            res.status(400).json({message: "course not found", error: error})
        }
    )
}

module.exports.updateCourse = (req, res) => {
    console.log("ta rodando isso aqui?")
    let id = req.params.id
    let body = req.body
    let promise = CourseModel.findByIdAndUpdate(id, body, {new: true}).exec()
    promise.then((course) => {
        res.status(200).json(view.render(course))
    }).catch((error) => {
        res.status(400).json({ message: "course not found", error: error })
    }
    )
}