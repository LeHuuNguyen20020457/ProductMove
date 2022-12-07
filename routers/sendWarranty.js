const express = require('express');
const router = express.Router();

const sendWarrantyController = require('../controllers/sendWarrantyController');
const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.post('/create', authorization, checkManager(['Agent']), sendWarrantyController.createSendWarranty);
router.get('/getAll', authorization, checkManager(['Agent']), sendWarrantyController.getAllProductsWarranty);

module.exports = router;
