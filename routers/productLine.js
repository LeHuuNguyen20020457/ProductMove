const express = require('express');
const router = express.Router();

const productLineController = require('../controllers/productLineController');
router.get('/productParameter', productLineController.productParameter);
router.post('/createProductLine', productLineController.createProductLine);

module.exports = router;
