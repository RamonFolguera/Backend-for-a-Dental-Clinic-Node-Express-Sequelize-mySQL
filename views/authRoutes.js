const authController = require('../controllers/authController');

const router = require('express').Router();


// router.post('/', authController.register);
router.post('/', authController.login);

module.exports = router;