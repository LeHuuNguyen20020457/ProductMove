const express = require('express');
const router = express.Router();

const buyController = require('../controllers/buyController');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.get('/info', authorization, checkManager(['Agent']), buyController.getInterBuy);

module.exports = router;
