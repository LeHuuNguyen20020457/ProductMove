const express = require('express');
const router = express.Router();

const managerController = require('../controllers/managerController');
const { uploadImage } = require('../middlewares/uploadImage');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.post(
    '/uploadAvatar',
    authorization,
    checkManager(['ManufactureFactory', 'Agent', 'warrantyCenter']),
    uploadImage('avatars'),
    managerController.uploadAvatar,
);

router.get(
    '/createTK',
    authorization,
    checkManager(['Admin']),
    managerController.getInterRegister,
);

module.exports = router;
