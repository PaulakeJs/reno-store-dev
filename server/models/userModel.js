const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    status:{
        type:String,
        default:'active'
    },
    profilePic:{
        type:String,
        default:''
    }
},{
        timestamps:true
})


const user = mongoose.model('Users', userSchema)

module.exports = user