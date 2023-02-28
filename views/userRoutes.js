
const userController = require ('../controllers/userController');
const router = require('express').Router();


//Endpoints CRUD

router.get("/", userController.getAllUsers);
router.post("/", userController.createUsers);

//export router so it can be imported from other files once it is executed 
module.exports = router;