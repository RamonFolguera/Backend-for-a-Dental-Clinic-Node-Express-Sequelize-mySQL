const roleController = require('../controllers/roleController');

const router = require('express').Router();

router.get('/', roleController.getRoles);

module.exports = router;