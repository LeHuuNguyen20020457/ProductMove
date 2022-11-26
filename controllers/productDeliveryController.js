const { productDelivery, Inventory } = require('../models');

class productDeliveryController {
    //[POST] /productDelivery/create
    createProductDelivery(req, res, next) {
        const { warehouseID, agentID, codeProductLine, amount } = req.body;

        // xuất hàng cho đại lý
        productDelivery
            .create({
                warehouseID: warehouseID,
                agentID: agentID,
                codeProductLine: codeProductLine,
                amount: +amount,
            })
            .then((data) => {
                //giảm lượng sản phẩm trong kho của cơ sở sản xuất sau khi xuất
                Inventory.decrement(
                    { inventoryNumber: +amount },
                    {
                        where: {
                            warehouseID: warehouseID,
                            codeProductLine: codeProductLine,
                        },
                    },
                );
                res.status(200).send('Đã xuất kho');
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}

module.exports = new productDeliveryController();
