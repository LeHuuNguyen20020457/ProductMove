const { Warehouse } = require('../models');
class warehouseController {
    //[POST] /warehouse/create
    createWarehouse(req, res, next) {
        const { name, idOfCssxOrDl, warehouseType } = req.body;

        Warehouse.create({
            name,
            idOfCssxOrDl,
            warehouseType,
        })
            .then((data) => {
                res.status(200).send('Tạo thành công');
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    // [PUT]
}

module.exports = new warehouseController();
