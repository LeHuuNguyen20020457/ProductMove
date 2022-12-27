const { Buy, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');
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


    //[GET] /buy/tkbuy
    async getAllBuy(req, res, next) {
        
        var SlspOfMonth = await sequelize.query(`SELECT count(id) as SL
                                                FROM buys 
                                                group by month(timeToBuy);`,
                                                { type: QueryTypes.SELECT, raw: true })
        res.render('agent/tkbuy.hbs', {SlspOfMonth, isShow:true})
    }
}

module.exports = new buyController();
