const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

authController.register = async (req, res) => {
    try {
        const {name, first_surname, second_surname, phone, address, email, password} = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

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
        return res.json(
            {
            success: true,
            message: "Register was succesful",
            data: newUser
            });

    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong with Register",
                error: error.message
            })
    }
}

authController.login = async (req, res) => {
    try {
        //recuperamos lo que viene por el body del login
        const {email, password} = req.body;

        //la tabla user tiene el hash encrypted. el usuario se registra con el email
        //busco el usuario
        const user = await User.findOne(
            {
                where: {
                    email:email,
                }
            },
        );
        if(!user) {
            return res.send("The email address or password is incorrect. Please try again.") 
        }
            //compara los passwords encryptado
        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch) {
            return res.send("The email address or password is incorrect. Please try again.") 
        }
        //si no coincide return "is incorrect", si coincide entonces creame el token
        const token = jwt.sign(
            { //aqui podemos meter lo que queramos
                name: user.name,
                userId: user.id,
                email: user.email,
                roleId: user.role_id
            }, 
            process.env.JWT_SECRET, //para verificar q ese token para mi aplicacion es valido, cuanto mas largo mejor
            //PARA HACER UN JWT_SECRET y guardarlo en env
            { expiresIn: '2h' }  //en 2h expire y no valga
        );

        return res.json({
            success: true,
            message: "Login succesful",
            data: token
        })
    } catch (error) {
        return res.status(500).json({
                            success: false,
                            message: "Somenthing went wrong with Login",
                            error: error.message
                        })
    }
}

module.exports = authController;
