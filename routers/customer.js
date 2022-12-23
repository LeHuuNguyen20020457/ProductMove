const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const buyController = require('../controllers/buyController');
const productController = require('../controllers/productController');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.post('/searchProductWarranty', authorization, checkManager(['Agent']), customerController.searchProductWarranty);
router.get('/', authorization, checkManager(['Agent']), customerController.searchProductBought);
router.post(
    '/createCustomer',
    authorization,
    checkManager(['Agent']),
    customerController.createCustomer,
    buyController.createBuy,
    productController.deleteProduct,
);

module.exports = router;
