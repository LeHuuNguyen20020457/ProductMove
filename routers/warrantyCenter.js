const express = require('express');
const router = express.Router();

const warrantyCenterController = require('../controllers/warrantyCenterController');

router.get('/:id', warrantyCenterController.getWarrantyCenter);
router.get('/', warrantyCenterController.getAllWarrantyCenter);
router.post('/createWarrantyCenter', warrantyCenterController.createWarrantyCenter);
router.put('/updateWarrantyCenter/:id', warrantyCenterController.updateWarrantyCenter);
router.delete('/deleteWarrantyCenter/:id', warrantyCenterController.deleteWarrantyCenter);

module.exports = router;
