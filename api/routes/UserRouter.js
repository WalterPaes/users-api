const express = require("express")
const UserController = require("../controllers/UserController.js")

const userRouter = express.Router();

userRouter
    .get("/users", UserController.listAll)
    .post("/users", UserController.create)
    .get("/users/:id", UserController.getById)
    .put("/users/:id", UserController.update)
    .delete("/users/:id", UserController.delete)

module.exports = userRouter; 