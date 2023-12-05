const mongoose = require('mongoose')

mongoose.connect(process.env.mongo_url)


const connection = mongoose.connection

connection.on('connected',()=>{
    console.log('connected to database')
})

connection.on('error',()=>{
    console.log('failed to connect to database')
})


module.exports = connection