const { Buy } = require('../models');
class buyController {
    createBuy(req, res, next) {
        const { productID, id } = req.buy;
        Buy.create({
            timeToBuy: new Date(),
            statusProduct: 'good',
            customerID: id,
            productID,
        })
            .then((data) => {
                res.status(200).send('Đã ghi nhận');
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}

module.exports = new buyController();
