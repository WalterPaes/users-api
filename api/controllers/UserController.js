const passwordHash = require("../../libs/passwordHash.js")
const User = require("../models/User.js")

class UserController {

    static async listAll(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async create(req, res) {
        try {
            const newUser = new User(req.body)
            const user = await newUser.save()
            res.status(201).json(user)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params
            const user = await User.findById(id)
            res.json(user)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params
            const data = req.body
            const user = await User.findByIdAndUpdate(id, { $set: data })
            res.json(user)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static delete(req, res) {
        try {
            const { id } = req.params
            User.findByIdAndRemove(id, (err) => {
                if (err) {
                    res.status(500).json({ message: err.message })
                }

                res.status(204).send()
            })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user || !passwordHash.checkPassword(password, user.password)) {
                return res.status(401).json({ message: 'Incorrect email or password' })
            }

            res.json({ ok: "ok" })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = UserController;