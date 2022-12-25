const express = require('express');
const router = express.Router();

const warrantyCenterController = require('../controllers/warrantyCenterController');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.get(
    '/repaired',
    authorization,
    checkManager(['warrantyCenter']),
    warrantyCenterController.getAllProductsRepaired,
);
router.get('/DSBH',authorization,checkManager(['warrantyCenter']), warrantyCenterController.getDSBH);
router.get('/:id', warrantyCenterController.getWarrantyCenter);
router.get('/', warrantyCenterController.getAllWarrantyCenter);
router.post(
    '/createWarrantyCenter',
    authorization,
    checkManager(['Admin']),
    warrantyCenterController.createWarrantyCenter,
);
router.put(
    '/updateWarrantyCenter/:id',
    authorization,
    checkManager(['Admin']),
    warrantyCenterController.updateWarrantyCenter,
);
router.delete(
    '/deleteWarrantyCenter/:id',
    authorization,
    checkManager(['Admin']),
    warrantyCenterController.deleteWarrantyCenter,
);

module.exports = router;
