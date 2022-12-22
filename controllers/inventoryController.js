const { Inventory , Warehouse, productLine} = require('../models');
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
            inventoryNumber: +inven.inventoryNumber + Number(amount),
        });
        inven.save();
        res.status(200).redirect('back');
    }


    //[POST] /inventory/xuatkho
    handleXuatKho(req, res, next) {
        const {selectedAgent, dateXuat, typeXuat, note, tax, promotionalMoney, payments, selectedWarehouse, rowsProductXK} = req.body;
        // console.log( {selectedAgent, dateXuat, typeXuat, note, tax, promotionalMoney, payments, selectedWarehouse, rowsProductXK})
        for(let i = 0; i< rowsProductXK.length; i++){
            Inventory.decrement({
                inventoryNumber: Number(rowsProductXK[i].amount)
            }, {
                where: {
                   [Op.and]: {
                        warehouseID: Number(selectedWarehouse.codeWarehouse),
                        codeProductLine: rowsProductXK[i].codeProductLine
                   }
                }
            })
            .then(()=> {
                const dayMonthYear = dateXuat.split('-')
                var totalMoneys = 0;
                for(let i = 0; i < rowsProductXK.length; i++){
                     totalMoneys += Number(rowsProductXK[i].totalPrice.split(' ')[0])
                }
                 
                totalMoneys -= Number(promotionalMoney)
                totalMoneys += totalMoneys*(Number(tax)/100)
                
                res.render('warehouse/phieuxuatkho.hbs', {
                 selectedAgent,
                 dayMonthYear,
                 typeXuat,
                 tax,
                 note,
                 promotionalMoney,
                 payments,
                 selectedWarehouse,
                 rowsProductXK,
                 totalMoneys,
                }, function(err, html) {
                    if(err) res.status(500).send(err)
                    res.status(200).send(html)
                })
            })
            .catch(() => {
                console.log('đã update thất bại')
            })
        }

    //     console.log('da den day')
    //    res.render('warehouse/phieuxuatkho.hbs')
    }

}

module.exports = new inventoryController();
