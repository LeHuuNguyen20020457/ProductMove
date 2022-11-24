const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const buyController = require('../controllers/buyController');
const productController = require('../controllers/productController');

router.get('/', customerController.searchProductBought);
router.post(
    '/createCustomer',
    customerController.createCustomer,
    buyController.createBuy,
    productController.deleteProduct,
);

module.exports = router;
