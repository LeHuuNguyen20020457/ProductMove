const { Customer, Buy, Product, sequelize } = require('../models');
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');

class customerController {
    //[GET] /customer/buy
    // lấy tất cả các sản phẩm mà 1 khách hàng đã mua
    searchProductBought(req, res, next) {
        const numberPhone = req.query.phone;
        Customer.findOne({
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

    //[POST] /customer/buy/searchProductWarranty
    //lấy tất cả các sản phẩm mà khách hàng đã mua trong thời gian bảo hành
    async searchProductWarranty(req, res, next) {
       
        const numberPhone = req.body.phone;
        
        var pros = await sequelize.query(
            `SELECT C.name, C.phone, PL.nameProductLine as nameProduct, PL.warrantyPeriod, P.productStatus, P.id as productID,B.id as MDH, B.timeToBuy, ADDDATE( B.timeToBuy, INTERVAL PL.warrantyPeriod*365 DAY) AS expirationIime
        FROM customers as C 
        INNER JOIN buys as B ON B.customerID = C.id
        INNER JOIN products as P ON B.productID = P.id
        INNER JOIN productlines as PL ON PL.codeProductLine = P.codeProductLine
        WHERE DATEDIFF(CURDATE(), B.timeToBuy) / 365 < PL.warrantyPeriod
        AND C.phone = ${numberPhone}
        AND NOT P.productStatus = 2;
        `,
            { type: QueryTypes.SELECT },
        );
        
        pros = pros.map((pro, index) => {
            if(Number(pro.productStatus) === 0){
                return {
                    ...pro,
                    productStatus: 'Tốt',
                    timeToBuy: pro.timeToBuy.toLocaleDateString(),
                    expirationIime: pro.expirationIime.toLocaleDateString()
                }
            }
            else if(Number(pro.productStatus) === 1)
            {
                return {
                    ...pro,
                    productStatus: 'Đang sửa chửa',
                    timeToBuy: pro.timeToBuy.toLocaleDateString(),
                    expirationIime: pro.expirationIime.toLocaleDateString()
                }
            }
            else{
                return {
                    ...pro,
                    productStatus: 'Lỗi',
                    timeToBuy: pro.timeToBuy.toLocaleDateString(),
                    expirationIime: pro.expirationIime.toLocaleDateString()
                }
            }
        })
        
        res.render('warehouse/tableSPBH.hbs', {
            pros
        }, function(err, html) {
            if(err) res.status(500).send(err)
            res.status(200).send(html)
        })
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
