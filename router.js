
//Importo método router() de la clase express
const router = require('express').Router();
const usersRoutes = require ('./views/usersRoutes');
const servicesRoutes = require ('./views/servicesRoutes');
const appointmentsRoutes = require ('./views/appointmentsRoutes');

router.use('/services', servicesRoutes);
router.use('/users', usersRoutes);
router.use('/appointments', appointmentsRoutes);


//Exporto router
module.exports = router;