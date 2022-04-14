const app = require("./api/app.js");
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server is up!"))