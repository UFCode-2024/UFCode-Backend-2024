const mongoose = require('mongoose')

module.exports = function(uri){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.connection.on('connected', function(){
        console.log("Mongoose! Conected in " + uri)
    })
    mongoose.connection.on('diconnected', function(){
        console.log("Mongoose! disconected of " + uri)
    })
    mongoose.connection.on('error', function(error){
        console.log("Mongoose! conection error " + error)
    })

    mongoose.set('debug', true)

}