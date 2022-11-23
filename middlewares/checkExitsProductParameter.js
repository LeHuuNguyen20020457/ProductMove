const { productParameter } = require('../models');

module.exports = function (req, res, next) {
    const codeProductLine = req.params.codeProductLine;

    productParameter
        .findOne({
            where: {
                codeProductLine: codeProductLine,
            },
        })
        .then((data) => {
            if (data) {
                res.status(200).send(data);
            } else {
                next();
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
