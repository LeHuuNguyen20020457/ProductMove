const { SendWarranty, Agent, Product } = require('../models');
class sendWarrantyController {
    //tạo bảng SendWarranty đồng thời update lại productStatus của products vì nó đang bảo hành
    //[POST] SendWarranty/create
    createSendWarranty(req, res, next) {
        const userId = req.userId;
        const { productID, warrantyCenterID, description } = req.body;
        console.log({ productID, warrantyCenterID, description })
        Agent.findOne({
            where: {
                managerID: userId,
            },
        }).then((agent) => {
            SendWarranty.create({
                productID: Number(productID),
                agentID: agent.id,
                warrantyCenterID: Number(warrantyCenterID),
                description,
            })
                .then(() => {
                    Product.update(
                        {
                            productStatus: 1,
                        },
                        {
                            where: {
                                id: Number(productID),
                            },
                            paranoid: false,
                        },
                    )
                        .then(() => {
                            console.log('vào đây')
                            res.render('agent/warranty.hbs')
                            // res.status(200).send('Gửi bảo hành thành công');
                        })
                        .catch(() => {
                            res.status(500).send('Gửi bảo hành không thành công');
                        });
                })
                .catch((err) => {
                    res.status(500).send('Gửi bảo hành không thành công');
                });
        });
    }

    //lấy ra tất cả các sản phẩm mà 1 đại lý đang gửi bảo hành
    // [GET] /SendWarranty/getAll
    getAllProductsWarranty(req, res, next) {
        const userId = req.userId;
        Agent.findOne({
            where: {
                managerID: userId,
            },
        }).then((agent) => {
            agent
                .getSendWarranties()
                .then((data) => {
                    res.status(200).send(data);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });
    }

    //[DELETE] /sendWarranty/delete
    deleteSendWarranty(req, res, next) {
        const {id, productID, status} = req.body;
        console.log({id, productID, status})

        SendWarranty.destroy({
            where: {
                id: Number(id)
            }
        })
        .then(() => {
            if(Number(status) === 0) {
                Product.update(
                    {
                        productStatus: 0,
                    },
                    {
                        where: {
                            id: Number(productID),
                        },
                        paranoid: false,
                    },
                )
                .then(() => {
                    res.status(200).send('<div>Mã SP</div>')
                })
                .catch((err) => {
                    res.status(500).send(err)
                })
            }
            else if(Number(status) === 2){
                Product.update(
                    {
                        productStatus: 2,
                    },
                    {
                        where: {
                            id: Number(productID),
                        },
                        paranoid: false,
                    },
                )
                .then(() => {
                    res.status(200).send('Đã gửi sản phẩm cho cơ sở sản xuất')
                })
                .catch((err) => {
                    res.status(500).send(err)
                })
            }
        })
    }
}

module.exports = new sendWarrantyController();
