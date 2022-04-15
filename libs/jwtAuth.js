const jwt = require("jsonwebtoken")
const secretKey = "oi"

const jwtAuth = {
    generateToken: (payload) => {
        return jwt.sign(payload, secretKey)
    },
    verifyToken: (token) => {
        return jwt.verify(token, secretKey)
    }
}

module.exports = jwtAuth;