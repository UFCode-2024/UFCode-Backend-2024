const mongoose = require('mongoose')
module.exports = function(){
    const schema = mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            positionX:{
                type: Number,
                required: true
            },
            positionY:{
                type: Number,
                required: true
            },
            description:{
                type: String,
                required: true
            }
        }
    )
    return mongoose.model('House', schema);
}()