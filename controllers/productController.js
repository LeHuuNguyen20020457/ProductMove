const { Product, productLine, SendWarranty, Buy } = require('../models');
const { Op } = require('sequelize');
class productController {
    // xoá khi người mua mới mua sản phẩm này
    deleteProduct(req, res, next) {
        const { productID } = req.buy;

        Product.destroy({
            where: {
                id: productID,
            },
        })
            .then((data) => {
                res.render('agent/home.hbs', function (err, html) {
                    if(err) res.status(500).send(err)
                    res.status(200).send(html);
                })
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //lấy thông tin sản phẩm
    //[GET] product/:codeProduct
    getDetailProduct(req, res, next) {
        const codeProduct = req.params.codeProduct;

        Product.findOne({
            where: {
                id: codeProduct,
            },
            include: productLine,
        })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //update status product khi sản phẩm đã sửa xong hoặc không thể sửa được

    //[POST] /updateStatus/:id?type=0
    //id: là thứ tự sản phẩm trong bảng sendWarranties
    //type: muốn update ProductStatus theo 0 hoặc 2
    updateProductStatus(req, res, next) {
        const id = req.params.id;
        const type = req.query.type;

        SendWarranty.findOne({
            where: {
                id: id,
            },
        }).then((data) => {
            if (!data) {
                res.status(404).send('không có dữ liệu');
                return;
            }
            data.getProduct({
                //lưu ý chỗ này chưa test
                where: {
                    deletedAt: {
                        [Op.ne]: null,
                    },
                },
                paranoid: false,
            })
                .then((product) => {
                    if (!product) res.status(404).send('Không xác định sản phẩm đã bảo hành');
                    product
                        .update({
                            productStatus: +type,
                        })
                        .then(() => {
                            SendWarranty.destroy({
                                where: { id: id },
                            });
                            if (+type === 2) {
                                product.getBuys().then((buy) => {
                                    buy[0].destroy();
                                });
                            }
                            res.status(200).send('Đã gửi thông báo');
                        })
                        .catch(() => {
                            res.status(500).send('Đã gửi thông báo không thành công');
                        });
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });
    }
}

module.exports = new productController();
