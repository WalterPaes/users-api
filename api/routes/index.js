const express = require("express")
const userRouter = require("./UserRouter.js")

const router = (app) => {
    app.route('/').get((req, res) => {
        res.send("User API");
    })

    app.use(express.json());
    app.use(userRouter);
}

module.exports = router;