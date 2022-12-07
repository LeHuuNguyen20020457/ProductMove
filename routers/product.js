const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.post('/updateStatus/:id', productController.updateProductStatus);
router.get('/:codeProduct', productController.getDetailProduct);

module.exports = router;
