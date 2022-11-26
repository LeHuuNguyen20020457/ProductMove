const express = require('express');
const router = express.Router();

const productDeliveryController = require('../controllers/productDeliveryController');

router.post('/create', productDeliveryController.createProductDelivery);

module.exports = router;
