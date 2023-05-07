const User = require('../model/user.schema.js');

module.exports = {
    addUser: async (req, res) => {
        try {
            const result = await User.create(req.body)
            res.send(result)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },

    getUser: async (req, res) => {
        try {
            const users = await User.find({})
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}