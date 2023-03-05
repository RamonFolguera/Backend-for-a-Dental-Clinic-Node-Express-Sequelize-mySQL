const { User } = require("../models");

const userController = {};

userController.getAllUsersAsDoctor = async (req, res) => {
    try {
        const users = await User.findAll(
            {
                where:{
                    role_id : 1
                },
            attributes: {
                exclude: ["password", "createdAt","updatedAt", "role_id"],
        }
    }
        );
        return res.json(
            {
            success: true,
            message: "All Registered Users succesfully retrieved as user doctor",
            data: users
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all registered users as user doctor",
            error: error.message
        })
    }
}

userController.getMyUser = async(req,res) => {
    try {
        const user = await User.findByPk(req.userId);
        return res.json(
            {
                success: true,
                message: "User succesfully retrieved",
                data: user
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );
    }
}

userController.updateMyUser = async(req,res) => {
    try {
        const user = req.User;
        const changes= req.body.changes;
        
        user.update(changes);
        user.save();
        return res.json(
            {
                success: true,
                message: "User succesfully updated",
                data: user
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );
    }
}

userController.getAllUsersAsAdmin = async (req, res) => {
    try {
        const users = await User.findAll(
            {     
            attributes: {
                exclude: ["password"],
        }
    }
        );
        return res.json(
            {
            success: true,
            message: "All Registered Users succesfully retrieved as user admin",
            data: users
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all registered users as user admin",
            error: error.message
        })
    }
}

module.exports = userController;