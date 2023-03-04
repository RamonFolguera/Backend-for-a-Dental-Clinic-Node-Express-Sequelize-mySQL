
const userController = require ('../controllers/userController');
const isDoctor = require('../middleware/isDoctor');
const verifyChanges = require('../middleware/verifyChanges');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');


//Endpoints CRUD

//router.get("/", verifyToken, userController.getAllUsers);
router.get("/", verifyToken, isDoctor, userController.getAllUsersAsDoctor);
router.get("/me", verifyToken, userController.getMyUser);
router.put("/me", verifyToken,verifyChanges, userController.updateMyUser);

//export router so it can be imported from other files once it is executed 
module.exports = router;