
//Importo método router() de la clase express
const router = require('express').Router();
const userRoutes = require ('./views/userRoutes');
const serviceRoutes = require ('./views/serviceRoutes');
const appointmentRoutes = require ('./views/appointmentRoutes');
const roleRoutes = require ('./views/roleRoutes');
const doctorRoutes = require ('./views/doctorRoutes');
const authRoutes = require ('./views/authRoutes');
const verifyToken = require('./middleware/verifyToken')


router.use('/services', serviceRoutes);
router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/roles', roleRoutes);
router.use('/doctors', doctorRoutes);
router.use('/auth', authRoutes);


//Exporto router
module.exports = router;