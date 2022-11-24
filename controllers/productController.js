const { Product } = require('../models');
class productController {
    deleteProduct(req, res, next) {
        const { productID } = req.buy;

        Product.destroy({
            where: {
                id: productID,
            },
        })
            .then((data) => {
                res.status(200).send('Người mua đã được cập nhật');
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}

module.exports = new productController();
