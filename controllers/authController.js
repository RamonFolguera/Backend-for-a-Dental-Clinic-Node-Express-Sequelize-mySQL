const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

authController.register = async (req, res) => {
    try {
        const {name, first_surname, second_surname, phone, address, email, password} = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        console.log(encryptedPassword)

        const newUser = await User.create(
            {
                name: name,
                first_surname:first_surname,
                second_surname:second_surname,
                phone: phone,
                address:address,
                email: email,
                password: encryptedPassword,
                role_id: 1
            }
        )
        return res.json(newUser);

    } catch (error) {
            return res.status(500).json({
                success: true,
                message: "Somenthing went wrong",
                error: error.message
            })
    }
}




module.exports = authController;
