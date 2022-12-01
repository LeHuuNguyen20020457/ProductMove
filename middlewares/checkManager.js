const { Manager } = require('../models');
const { Op } = require('sequelize');

const checkManager = (arrType) => (req, res, next) => {
    const userId = req.userId;

    Manager.findOne({
        where: {
            id: userId,
        },
    })
        .then((manager) => {
            if (arrType.includes(manager.role)) {
                next();
            } else {
                res.status(403).send('Bạn không có quyền truy cập');
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

module.exports = {
    checkManager,
};
