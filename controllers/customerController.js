const { Customer, Buy, Product } = require('../models');
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

    //[POST] //customer/buy/createCustomer

    // cần phải nhập tên và SDDT khách hàng và mã SP
    createCustomer(req, res, next) {
        const { name, phone, productID } = req.body;
        // res.send(productID);
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
}

module.exports = new customerController();
