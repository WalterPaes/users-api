require('dotenv').config()
const jwt = require("jsonwebtoken")
const secretKey = process.env.JWT_SECRET

const jwtAuth = {
    generateToken: (payload) => {
        return jwt.sign(payload, secretKey)
    },
    verifyToken: (token) => {
        return jwt.verify(token, secretKey)
    }
}

module.exports = jwtAuth;