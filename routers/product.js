const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');


router.post('/updateStatus/:id',
authorization,
checkManager(['ManufactureFactory','Agent', 'warrantyCenter', 'Admin']),
productController.updateProductStatus);
router.get('/:codeProduct',authorization,
checkManager(['ManufactureFactory','Agent', 'warrantyCenter', 'Admin']),
productController.getDetailProduct);

module.exports = router;
