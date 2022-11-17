const express = require('express');
const router = express.Router();

const managerController = require('../controllers/managerController');

router.post('/register', managerController.register);
router.post('/login', managerController.login);

module.exports = router;
