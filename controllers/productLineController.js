const { sequelize, productLine, productParameter } = require('../models');
const { QueryTypes, NUMBER } = require('sequelize');
class productLineController {
    //[GET] /productLine/productParameter
    async productParameter(req, res, next) {
        try {
            const codeProductLine = req.query.type;

            const data = await sequelize.query(
                `SELECT A.nameProductLine, B.weight, B.PetrolTankCapacity, B.maximumCapacity, B.fuelConsumption
        FROM productlines as A
        INNER JOIN productparameters as B
        ON A.codeProductLine = B.codeProductLine
        WHERE A.codeProductLine = '${codeProductLine}';`,
                { type: QueryTypes.SELECT },
            );
            res.status(200).send(data);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    //[POST]
    //tạo ra các dòng sản phẩm vừa sản xuất

    createProductLine(req, res, next) {
        const { nameProductLine, price, avatar, warrantyPeriod, amount, codeProductLine, description } = req.body;
        productLine
            .create({
                nameProductLine,
                price,
                avatar,
                warrantyPeriod,
                amount: +amount,
                codeProductLine,
                description,
            })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}

module.exports = new productLineController();
