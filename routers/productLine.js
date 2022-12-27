const express = require('express');
const router = express.Router();

const productLineController = require('../controllers/productLineController');

const { uploadImage } = require('../middlewares/uploadImage');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.get('/productParameter',authorization,
checkManager(['ManufactureFactory','Agent', 'warrantyCenter', 'Admin']),
productLineController.productParameter);
router.get('/', authorization, checkManager(['Admin', 'Agent', 'ManufactureFactory', 'warrantyCenter']),   productLineController.getAllProductLine);
router.post(
    '/createProductLine',
    authorization,
    checkManager(['Admin']),
    uploadImage('productImage'),
    productLineController.createProductLine,
);

module.exports = router;
