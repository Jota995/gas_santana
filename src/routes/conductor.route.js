const {Router} = require('express');

const router = Router();

const conductorController = require('../controllers/conductor.controller');

router.get('/', conductorController.getAllConductores);
router.get('/:id', conductorController.getOneConductor);

module.exports = router;