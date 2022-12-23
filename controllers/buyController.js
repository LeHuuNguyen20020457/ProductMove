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


    //[GET] /buy/info
    getInterBuy(req, res, next) {
        res.render('agent/buy.hbs', {isShow: true})
    }
}

module.exports = new buyController();
