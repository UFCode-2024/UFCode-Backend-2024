const mongoose = require('mongoose')
module.exports = function () {
    const schema = mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            input: {
                type: String,
                required: true
            },
            expectedOutput: {
                type: String,
                required: true
            },
            id_house: {
                type: mongoose.Schema.ObjectId,
                ref: 'House'
            },
            id_difficulty: {
                type: mongoose.Schema.ObjectId,
                ref: 'Difficulty'
            },
            courses: [{
                    type: mongoose.Schema.ObjectId,
                    ref: 'Course'
                }],
            modules: [{
                    type: mongoose.Schema.ObjectId,
                    ref: 'Module'
                }]
        }
    )
    return mongoose.model('Problem', schema);
}()