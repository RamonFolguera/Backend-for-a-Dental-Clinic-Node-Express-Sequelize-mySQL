const appointmentController = require('../controllers/appointmentController');

const router = require('express').Router();

router.get('/:id', appointmentController.getAppointmentsById);
router.post('/', appointmentController.createAppointments);

module.exports = router;