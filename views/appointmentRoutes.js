const appointmentController = require('../controllers/appointmentController');
const isDoctor = require('../middleware/isDoctor');
const verifyToken = require('../middleware/verifyToken');
const verifyAppointmentChanges = require('../middleware/verifyAppointmentChanges');

const router = require('express').Router();

router.get('/user', verifyToken, appointmentController.getAppointmentsByuserId);
router.get('/', verifyToken, isDoctor, appointmentController.getAllAppointmentsAsDoctor);
router.post('/', verifyToken, appointmentController.createAppointments);
router.put('/', verifyToken, verifyAppointmentChanges, appointmentController.updateMyAppointment);

module.exports = router;