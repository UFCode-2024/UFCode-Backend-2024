const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubmissionSchema = new Schema({
    codeInput: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    error: {
        type: String,
        required: true
    },
    id_problem: {
        type: Schema.Types.ObjectId,
        ref: 'Problem'
    },
    id_language: {
        type: Schema.Types.ObjectId,
        ref: 'Language'
    }
})

module.exports = mongoose.model('Submission', SubmissionSchema)