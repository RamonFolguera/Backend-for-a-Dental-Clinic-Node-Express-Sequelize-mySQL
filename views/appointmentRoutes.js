const appointmentController = require('../controllers/appointmentController');

const router = require('express').Router();

router.get('/', appointmentController.getAppointments);
router.post('/', appointmentController.createAppointments);

module.exports = router;