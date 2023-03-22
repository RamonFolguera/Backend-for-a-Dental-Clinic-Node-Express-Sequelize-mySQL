const roleController = require('../controllers/roleController');
const isAdmin = require('../middleware/isAdmin');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();

router.get('/', roleController.getRoles);
router.put("/user/role", verifyToken, isAdmin, roleController.newRole);

// route

module.exports = router;