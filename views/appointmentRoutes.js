const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();

router.get('/', verifyToken, appointmentController.getAppointmentsByuserId);
router.post('/', verifyToken, appointmentController.createAppointments);

module.exports = router;