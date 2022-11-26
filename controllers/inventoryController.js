const { Inventory } = require('../models');
const { Op } = require('sequelize');

class inventoryController {
    //[POST] /inventory/addProductsToWarehouse
    async addProductsToWarehouse(req, res, next) {
        const { warehouseID, codeProductLine, amount } = req.body;

        // tìm xem dòng sản phẩm này đã có trong kho chưa
        // nếu có rồi thì cập nhật số lượng
        // nếu chưa có thì thêm mới vào kho
        const [inven, created] = await Inventory.findOrCreate({
            where: {
                warehouseID: warehouseID,
                codeProductLine: codeProductLine,
            },
            defaults: {
                inventoryNumber: 0,
            },
        });

        await inven.set({
            inventoryNumber: +inven.inventoryNumber + amount,
        });
        inven.save();
        res.status(200).send('Đã cho vào kho thành công');
    }
}

module.exports = new inventoryController();
