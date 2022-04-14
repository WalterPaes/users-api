const express = require("express")
const db = require("./config/db.js")

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open", () => {
    console.log("DB connection ok!")
})

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    return res.send('hello world')
})

module.exports = app;