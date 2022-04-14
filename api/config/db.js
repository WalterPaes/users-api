const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://alura:ROTsTHz2hPlKXDGN@alura.l5kuh.mongodb.net/users-api")

const db = mongoose.connection;

module.exports = db;