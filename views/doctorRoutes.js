const doctorController = require('../controllers/doctorController');

const router = require('express').Router();

router.get('/', doctorController.getDoctors);
router.post('/', doctorController.createDoctors);

module.exports = router;