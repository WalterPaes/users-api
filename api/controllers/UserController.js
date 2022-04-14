const User = require("../models/User.js")

class UserController {

    static async listAll(req, res) {
        await User.find((err, users) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }

            res.json(users)
        })
    }

    static async create(req, res) {
        const user = new User(req.body)

        await user.save((err) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }

            res.status(201).json(user)
        })
    }

    static async getById(req, res) {
        const { id } = req.params

        await User.findById(id, (err, user) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }

            res.json(user)
        })
    }

    static async update(req, res) {
        const { id } = req.params
        const data = req.body

        await User.findByIdAndUpdate(id, { $set: data }, (err, user) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }

            res.json(user)
        })
    }

    static async delete(req, res) {
        const { id } = req.params

        await User.findByIdAndRemove(id, (err) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }

            res.status(204).send()
        })
    }
}

module.exports = UserController;