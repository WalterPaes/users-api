const mongoose = require("mongoose")
const passwordHash = require("../../libs/passwordHash.js")

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, set: passwordHash.hashPassword },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
});


const User = mongoose.model('users', usersSchema);

module.exports = User;