const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const buyController = require('../controllers/buyController');

router.get('/', customerController.searchProductBought);
router.post('/createCustomer', customerController.createCustomer, buyController.createBuy);

module.exports = router;
