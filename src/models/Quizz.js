const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizzSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    option_one: {
        type: String,
        required: true
    },
    option_two: {
        type: String,
        required: true
    },
    option_three: {
        type: String,
        required: true
    },
    option_four: {
        type: String,
        required: true
    },
    option_correct: {
        type: String,
        required: true
    },
    modules: {
        type: mongoose.Schema.ObjectId,
        ref: 'Module'
    }
})

module.exports = mongoose.model('Quizz', QuizzSchema)