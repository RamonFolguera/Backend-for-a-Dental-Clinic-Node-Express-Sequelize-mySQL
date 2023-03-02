const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jspnwebtoken');

const authController = {};

authController.register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

    }catch (error) {
            return res.status(500).json({
                success: true,
                message: "Somenthing went wrong",
                error: error.message
            })
    }
}




module.exports = authController;
