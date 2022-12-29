const { Manager } = require('../models');
const { Op } = require('sequelize');

const checkManager = (arrType) => (req, res, next) => {
    const userId = req.userId;

    Manager.findOne({
        where: {
            id: userId,
        },
        raw: true,
    })
        .then((manager) => {
            if (arrType.includes(manager.role)) {
                if(manager.role === 'Admin'){
                    res.locals.admin = 'Admin'
                }
                res.locals.user = manager
                next();
            } else {
                // res.status(403).send('Bạn không có quyền truy cập');
                res.render('error/forbidden.hbs')
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

module.exports = {
    checkManager,
};
