const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');

router.post('/addProductsToWarehouse', inventoryController.addProductsToWarehouse);

module.exports = router;
