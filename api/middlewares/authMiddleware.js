const jwtAuth = require("../../libs/jwtAuth.js");

const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const check = jwtAuth.verifyToken(token)
        next();
    } catch (err) {
        return res.status(401).send();
    }
}

module.exports = authMiddleware;