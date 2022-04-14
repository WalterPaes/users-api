const express = require("express")

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('hello world')
})

app.listen(PORT, console.log("Server is up!"))