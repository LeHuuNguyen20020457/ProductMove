const express = require('express');
const router = express.Router();

const manufactureFactoryController = require('../controllers/manufactureFactoryController');
const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.get('/:id', manufactureFactoryController.getManufactureFactory);
router.get('/', manufactureFactoryController.getAllManufactureFactory);
router.post(
    '/createManufactureFactory',
    authorization,
    checkManager(['Admin']),
    manufactureFactoryController.createManufactureFactory,
);
router.put(
    '/updateManufactureFactory/:id',
    authorization,
    checkManager(['Admin']),
    manufactureFactoryController.updateManufactureFactory,
);
router.delete(
    '/deleteManufactureFactory/:id',
    authorization,
    checkManager(['Admin']),
    manufactureFactoryController.deleteManufactureFactory,
);

module.exports = router;
