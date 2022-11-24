const { Customer, Buy, Product } = require('../models');
const { Op } = require('sequelize');
const { response } = require('express');
class customerController {
    //[GET] /customer/buy
    // lấy tất cả các sản phẩm mà 1 khách hàng đã mua
    searchProductBought(req, res, next) {
        const numberPhone = req.query.phone;
        Customer.findAll({
            where: {
                phone: numberPhone,
            },

            include: [
                {
                    model: Product,
                    required: true,
                    paranoid: false,
                },
            ],
        })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //[POST] /customer/buy/createCustomer

    // cần phải nhập tên và SDDT khách hàng và mã SP
    createCustomer(req, res, next) {
        const { name, phone, productID } = req.body;

        //kiểm tra khách hàng đó đã tồn tại chưa nếu chưa thì tạo khách hàng
        Customer.findOne({
            where: {
                [Op.and]: [{ name: name }, { phone: phone }],
            },
        })
            .then((customer) => {
                if (customer) {
                    req.buy = {
                        productID: productID,
                        id: customer.id,
                    };
                    next();
                } else {
                    Customer.create({ name, phone })
                        .then((cus) => {
                            req.buy = {
                                productID: productID,
                                id: cus.id,
                            };
                            next();
                        })
                        .catch((err) => {
                            res.status(500).send(err);
                        });
                }
            })
            .catch((err) => {
                res.status(500).send(err);
            });
        // res.send(productID);
    }
}

module.exports = new customerController();
