const express = require('express');
const router = express.Router();

const buyController = require('../controllers/buyController');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.get('/info', authorization, checkManager(['Agent']), buyController.getInterBuy);
router.get('/tkbuy', authorization, checkManager(['Agent']), buyController.getAllBuy);

module.exports = router;
