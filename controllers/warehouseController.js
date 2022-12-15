const { Warehouse, productLine, ManufactureFactory, Agent, Manager, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');
function newWarehouse(CssxOrAgent, userId, name, res) {
    CssxOrAgent.findOne({
        where: { managerID: userId },
    })
        .then((data) => {
            //data là CSSX hoặc đại lý tìm được
            data.createWarehouse({ name: name })
                .then(() => {
                    res.status(200).send('Kho đã được tạo');
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

 function getAll(CssxOrAgent, userId, res) {
    CssxOrAgent.findOne({
        where: {
            managerID: userId,
        },
    })
        .then((data) => {
            data.getWarehouses({raw: true})
                .then(async (warehouses) => {
                  
                    let result = [];
                    for(let i = 0; i < warehouses.length; i++) {
                        let sum = await sequelize.query(`
                        SELECT SUM(I.inventoryNumber) AS sum
                        FROM warehouses AS W
                        LEFT JOIN inventories AS I ON W.id = I.warehouseID
                        WHERE W.id = ${warehouses[i].id};`, 
                        { type: QueryTypes.SELECT,
                            raw: true,
                        },)

                        result.push(sum[0].sum)
                    }                   
                    
                     
                        // res.status(200).send(result)
                        res.render('warehouse/warehouse.hbs', { warehouses, result, isShow: true})
                })
                .catch((err) => {
                    res.status(404).send('Ko thay kho');
                });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

class warehouseController {
    //[POST] /warehouse/create
    //chỉ có cssx và agent mới được tạo kho
    createWarehouseOf(req, res, next) {
        const userId = req.userId;
        const { name } = req.body;

        Manager.findOne({
            where: {
                id: userId,
            },
        })
            .then((manager) => {
                // kiểm tra xem manager nó thuộc CSSX hay đại lý
                const rol = manager.role;
                if (rol.toString() === 'ManufactureFactory') {
                    newWarehouse(ManufactureFactory, userId, name, res);
                } else {
                    newWarehouse(Agent, userId, name, res);
                }
            })
            .catch((err) => {
                res.status(500).send('noooo');
            });
    }

    // lấy tất cả các kho của 1 cơ sở sản xuất hoặc 1 agent
    //[GET] /warehouse/getWarehouse

    getWarehouse(req, res, next) {
        const userId = req.userId;

        Manager.findOne({
            where: {
                id: userId,
            },
        }).then((manager) => {
            // kiểm tra xe nó thuộc CSSX hay đại lý
            const rol = manager.role;
            if (rol.toString() === 'ManufactureFactory') {
                getAll(ManufactureFactory, userId, res);
            } else {
                getAll(Agent, userId, res);
            }
        });
    }

    //[GET] /warehouse/getDetailWarehouse/:id
     getDetailWarehouse(req, res, next) {
        const id = req.params.id;

        Warehouse.findAll({
            where: { id: id },
            include: productLine,
            raw: true,
            nest: true,
        })
            .then((data) =>res.render('warehouse/detailWarehouse.hbs', {detailWarehouses: data, isShow: true}))
            .catch((err) => res.status(500).send(err));
    }
}

module.exports = new warehouseController();
