const express = require('express');
const router = express.Router();

const partsController = require('../controllers/partsController');
const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.get('/all', authorization,
checkManager(['ManufactureFactory', 'Agent', 'warrantyCenter', 'Admin']),
partsController.getAllParts )

module.exports = router;