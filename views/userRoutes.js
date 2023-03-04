
const userController = require ('../controllers/userController');
const verifyUserChanges = require('../middleware/verifyUserChanges');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

//Endpoints CRUD

//router.get("/", verifyToken, userController.getAllUsers);
router.post("/", userController.createUsers);
router.get("/me", verifyToken, userController.getMyUser);
router.put("/me", verifyToken, verifyUserChanges, userController.updateMyUser);

//export router so it can be imported from other files once it is executed 
module.exports = router;