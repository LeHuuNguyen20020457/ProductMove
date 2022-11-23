const express = require('express');
const router = express.Router();

const productParameterController = require('../controllers/productParameterController');
const checkExitsProductParameter = require('../middlewares/checkExitsProductParameter');
router.post(
    '/createProductParameters/:codeProductLine',
    checkExitsProductParameter,
    productParameterController.createProductParameters,
);

module.exports = router;
