const express = require('express');
const router = express.Router();

const partsController = require('../controllers/partsController');

router.get('/all',partsController.getAllParts )

module.exports = router;