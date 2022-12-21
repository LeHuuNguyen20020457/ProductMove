const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');
const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.post(
    '/addProductsToWarehouse',
    authorization,
    checkManager(['Agent', 'ManufactureFactory']),
    inventoryController.addProductsToWarehouse,
);

router.post(
    '/xuatkho',
    authorization,
    checkManager(['Agent', 'ManufactureFactory']),
    inventoryController.handleXuatKho,
);


module.exports = router;
