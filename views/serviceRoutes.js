const serviceController = require('../controllers/serviceController');

const router = require('express').Router();

router.get('/', serviceController.getServices);
router.post('/', serviceController.createServices);

module.exports = router;