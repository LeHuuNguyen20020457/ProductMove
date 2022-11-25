const express = require('express');
const router = express.Router();

const manufactureFactoryController = require('../controllers/manufactureFactoryController');

router.post('/createManufactureFactory', manufactureFactoryController.createManufactureFactory);
router.put('/updateManufactureFactory/:id', manufactureFactoryController.updateManufactureFactory);
router.delete('/deleteManufactureFactory/:id', manufactureFactoryController.deleteManufactureFactory);

module.exports = router;
