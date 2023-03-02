const { User } = require("../models");
const user = require("../models/user");


const userController = {};

userController.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.send(users);
    } catch (error) {
        return res.status(500).send(error.message)

    }
}
userController.createUsers = (req, res) => {return res.send('Create Users')}

module.exports = userController;