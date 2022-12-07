const express = require('express');
const router = express.Router();

const manufacturingController = require('../controllers/manufacturingController');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.post('/createManufacturing', manufacturingController.createManufacturing);
router.get(
    '/getAll',
    authorization,
    checkManager(['ManufactureFactory']),
    manufacturingController.getAllManufacturings,
);

module.exports = router;
