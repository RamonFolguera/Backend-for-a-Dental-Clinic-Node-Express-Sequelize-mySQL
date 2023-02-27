const userController = {};

userController.getAllUsers = (req, res) => {return res.send('Get All Users')}
userController.createUsers = (req, res) => {return res.send('Create Users')}

module.exports = userController;