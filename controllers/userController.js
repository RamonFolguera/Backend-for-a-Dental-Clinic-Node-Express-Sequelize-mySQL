const { User } = require("../models");

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

userController.getMyUser = async(req,res) => {
    try {
        const user = await User.findByPk(req.userId);
        return res.json(
            {
                success: true,
                message: "user retrieved",
                data: user
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
    }

}
module.exports = userController;