const jwt = require('jsonwebtoken')
module.exports = (req, res, next)=>{
    try {
        // get token from header
        const token = req.header('authorization').split(' ')[1]
        const decrypt = jwt.verify(token, "paulakejs")
        req.body.userId = decrypt.userId
        next()
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }
}