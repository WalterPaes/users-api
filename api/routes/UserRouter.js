const express = require("express")
const UserController = require("../controllers/UserController.js")
const authMiddleware = require("../middlewares/authMiddleware.js")

const userRouter = express.Router();

userRouter
    .get("/users", authMiddleware, UserController.listAll)
    .post("/users", UserController.create)
    .get("/users/:id", authMiddleware, UserController.getById)
    .put("/users/:id", authMiddleware, UserController.update)
    .delete("/users/:id", authMiddleware, UserController.delete)
    .post("/login", UserController.login)

module.exports = userRouter; 