const express = require('express');
const router = express.Router();

const manufacturingController = require('../controllers/manufacturingController');

router.post('/createManufacturing', manufacturingController.createManufacturing);

module.exports = router;
