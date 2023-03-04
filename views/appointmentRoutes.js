const appointmentController = require('../controllers/appointmentController');
const isDoctor = require('../middleware/isDoctor');
const verifyToken = require('../middleware/verifyToken');
const verifyAppointmentChanges = require('../middleware/verifyAppointmentChanges');

const router = require('express').Router();

router.get('/user', verifyToken, appointmentController.getAppointmentsByuserId);
router.get('/doctor', verifyToken, isDoctor, appointmentController.getAllAppointmentsAsDoctor);
router.post('/', verifyToken, appointmentController.createAppointments);
router.put('/', verifyToken, verifyAppointmentChanges, appointmentController.updateMyAppointment);
router.delete('/',verifyToken, appointmentController.deleteMyAppointment);

//extra
router.get('/doctor/my', verifyToken,isDoctor, appointmentController.getMyAppointmentsAsDoctor);
router.get('/doctor/my-verified', verifyToken, isDoctor, appointmentController.getMyPendingAppointmentsAsDoctor);
router.put('/verify', verifyToken, isDoctor, appointmentController.verify);

module.exports = router;