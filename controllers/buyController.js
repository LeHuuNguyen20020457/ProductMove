const { Buy } = require('../models');
class buyController {
    createBuy(req, res, next) {
        const { productID, id } = req.buy;

        Buy.create({
            timeToBuy: new Date(),
            customerID: id,
            productID,
        })
            .then((data) => {
                next();
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}

module.exports = new buyController();
