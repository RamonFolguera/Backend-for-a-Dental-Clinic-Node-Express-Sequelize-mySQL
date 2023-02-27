
//execute Router() method from express

const router = require('express').Router();


//Endpoints CRUD

router.get("/", UsersController.getAllUsers);
router.post("/", UsersController.newUser);

//export router so it can be imported from other files once it is executed 
module.exports = router;