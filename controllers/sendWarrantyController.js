const { SendWarranty, Agent, Product } = require('../models');
class sendWarrantyController {
    //tạo bảng SendWarranty đồng thời update lại productStatus của products vì nó đang bảo hành
    //[POST] SendWarranty/create
    createSendWarranty(req, res, next) {
        const userId = req.userId;
        const { productID, warrantyCenterID, description } = req.body;
        Agent.findOne({
            where: {
                managerID: userId,
            },
        }).then((agent) => {
            SendWarranty.create({
                productID: productID,
                agentID: agent.id,
                warrantyCenterID: warrantyCenterID,
                description,
            })
                .then(() => {
                    Product.update(
                        {
                            productStatus: 1,
                        },
                        {
                            where: {
                                id: productID,
                            },
                        },
                    )
                        .then(() => {
                            res.status(200).send('Gửi bảo hành thành công');
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

    //lấy ra tất cả các sản phẩm mà 1 trung tâm đang bảo hành
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
}

module.exports = new sendWarrantyController();
