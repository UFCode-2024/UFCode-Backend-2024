const mongoose = require('mongoose');

module.exports = (function() {
    const UserProblemSchema = mongoose.Schema(
        {
            id_user: {
                type: String,
                required: true
            },
            id_problem: {
                type: mongoose.Schema.ObjectId,
                ref: 'Problem'
            }
        }
    )
    return mongoose.model('UserProblem', UserProblemSchema);
})()