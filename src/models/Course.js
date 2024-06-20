const mongoose = require('mongoose')

module.exports = function(){
    const schema = mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            }
        }
    )
    return mongoose.model('Course', schema);
}()