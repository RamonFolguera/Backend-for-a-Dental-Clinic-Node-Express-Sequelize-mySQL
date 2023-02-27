
//Importo método router() de la clase express
const router = require('express').Router();

router.use('/services', servicesRouter);
router.use('/users', usersRouter)


//Exporto router
module.exports = router;