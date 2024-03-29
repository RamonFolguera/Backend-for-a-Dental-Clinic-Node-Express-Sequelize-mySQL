const appointmentController = require('../controllers/appointmentController');
const isDoctor = require('../middleware/isDoctor');
const verifyToken = require('../middleware/verifyToken');

const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();

router.get('/user', verifyToken, appointmentController.getAppointmentsByuserId);
router.get('/doctor', verifyToken, isDoctor, appointmentController.getAllAppointmentsAsDoctor);
router.post('/', verifyToken, appointmentController.createAppointments);
router.put('/:id', verifyToken, appointmentController.updateMyAppointment);
router.delete('/:id',verifyToken, appointmentController.deleteMyAppointment);

//extras
router.get('/doctor/my', verifyToken,isDoctor, appointmentController.getMyAppointmentsAsDoctor);
router.get('/doctor/my-verified', verifyToken, isDoctor, appointmentController.getMyPendingAppointmentsAsDoctor);
router.put('/verify', verifyToken, isDoctor, appointmentController.verify);
router.get('/admin', verifyToken, isAdmin, appointmentController.getAllAppointmentsAsAdmin);

module.exports = router;