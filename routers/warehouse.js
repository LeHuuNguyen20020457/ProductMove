const express = require('express');
const router = express.Router();

const warehouseController = require('../controllers/warehouseController');

router.post('/create', warehouseController.createWarehouse);

module.exports = router;
