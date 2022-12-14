const { sequelize, productLine, productParameter } = require('../models');
const {mutipleSequelizeToObject} = require('../util/sequelize')
const { QueryTypes } = require('sequelize');

class productLineController {


    //[GET] /productLine/productParameter?type=
    async productParameter(req, res, next) {
        try {
            const codeProductLine = req.query.type;

            const data = await sequelize.query(
                `SELECT A.nameProductLine, A.warrantyPeriod, A.avatar, A.price, B.weight, B.PetrolTankCapacity, B.maximumCapacity, B.fuelConsumption
        FROM productlines as A
        INNER JOIN productparameters as B
        ON A.codeProductLine = B.codeProductLine
        WHERE A.codeProductLine = '${codeProductLine}';`,
                { type: QueryTypes.SELECT,
                raw: true,
               },
            );
            // res.status(200).send(data)
            res.render('product/detailProductLine', {productLine: data[0], isShow: true})
        } catch (err) {
            res.status(500).send(err);
        }
    }


    //[GET] trang home
    getAllProductLine(req, res, next) {
        productLine.findAll({
            raw: true,
        })
        .then((productlines) => {
            // res.status(200).send(productlines)
            res.render('home.hbs', {productlines,  isShow: true})
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    }

    //[POST] /productLine/createProductLine

    //tạo ra các dòng sản phẩm mới
    createProductLine(req, res, next) {
        const file = req.file;
        const avatar = `http://localhost:3000/${file.path}`;

        const {
            codeProductLine,
            nameProductLine,
            price,
            warrantyPeriod,
            description,
            weight,
            PetrolTankCapacity,
            maximumCapacity,
            fuelConsumption,
        } = req.body;

        productLine
            .create({
                codeProductLine,
                nameProductLine,
                price,
                avatar,
                warrantyPeriod,
                description,
            })
            .then((data) => {
                productParameter
                    .create({
                        codeProductLine,
                        weight,
                        PetrolTankCapacity,
                        maximumCapacity,
                        fuelConsumption,
                    })
                    .then((data) => {
                       res.redirect('back')
                    })
                    .catch((err) => {
                        res.status(500).send(err);
                    });
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }


    //[GET] /productLine/create
    getInterCreatePL(req, res, next) {
        res.render('admin/createPL.hbs', {isShow: true})
    }
}

module.exports = new productLineController();
