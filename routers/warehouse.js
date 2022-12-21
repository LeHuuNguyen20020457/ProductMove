const express = require('express');
const router = express.Router();

const { ManufactureFactory, Agent } = require('../models');
const warehouseController = require('../controllers/warehouseController');
const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.post(
    '/create',
    authorization,
    checkManager(['ManufactureFactory', 'Agent']),
    warehouseController.createWarehouseOf,
);

router.get(
    '/getWarehouse',
    authorization,
    checkManager(['ManufactureFactory', 'Agent']),
    warehouseController.getWarehouse,
);

router.get(
    '/getAllWarehouse',
    authorization,
    checkManager(['ManufactureFactory', 'Agent']),
    warehouseController.getNhapKho,
);

router.get(
    '/xuatkho',
    authorization,
    checkManager(['ManufactureFactory']),
    warehouseController.getXuatKho,
);


router.get('/getDetailWarehouse/:id', warehouseController.getDetailWarehouse);

module.exports = router;
