const express = require("express")
const db = require("./config/db.js")
const routes = require("./routes/index.js")

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open", () => {
    console.log("DB connection ok!")
})

const app = express();
routes(app)

app.get('/', (req, res) => {
    return res.send('hello world')
})

module.exports = app;