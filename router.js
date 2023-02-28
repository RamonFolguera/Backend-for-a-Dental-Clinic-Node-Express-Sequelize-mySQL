
//Importo método router() de la clase express
const router = require('express').Router();
const userRoutes = require ('./views/userRoutes');
const serviceRoutes = require ('./views/serviceRoutes');
const appointmentRoutes = require ('./views/appointmentRoutes');
const roleRoutes = require ('./views/roleRoutes');

router.use('/services', serviceRoutes);
router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/roles', roleRoutes);


//Exporto router
module.exports = router;