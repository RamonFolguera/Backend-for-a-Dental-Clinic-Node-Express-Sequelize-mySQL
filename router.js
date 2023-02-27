
//Importo método router() de la clase express
const router = require('express').Router();
const usersRouter = require ('./views/usersRouter');
const servicesRouter= require ('./views/servicesRouter');

router.use('/services', servicesRouter);
router.use('/users', usersRouter);


//Exporto router
module.exports = router;