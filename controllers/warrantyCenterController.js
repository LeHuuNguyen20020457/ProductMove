const { warrantyCenter, sequelize } = require('../models');
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');

class warrantyCenterController {
    //[GET] /warrantyCenter
    getAllWarrantyCenter(req, res, next) {
        warrantyCenter
            .findAll({raw: true})
            .then((warrantyCenters) => 
            res.render('parts', {warrantyCenters: warrantyCenters, isShow: true})
            // res.status(200).send(warrantyCenters)
            )
            .catch((err) => res.status(500).send(err));
    }

    //[GET] /warrantyCenter/:id
    getWarrantyCenter(req, res, next) {
        const id = req.params.id;
        warrantyCenter
            .findOne({
                where: {
                    id: id,
                },
            })
            .then((WC) => {
                res.status(200).send(WC);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //[POST] /warrantyCenter/createWarrantyCenter/
    createWarrantyCenter(req, res, next) {
        const { name, address, phone, email, managerID } = req.body;
        warrantyCenter
            .create({
                name,
                address,
                phone,
                email,
                managerID,
            })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //[POST] warrantyCenter/updateWarrantyCenter/:id
    updateWarrantyCenter(req, res, next) {
        const { name, address, phone, email, managerID } = req.body;
        const id = req.params.id;
        warrantyCenter
            .update(
                {
                    name,
                    address,
                    phone,
                    email,
                    managerID,
                },
                {
                    where: {
                        id: id,
                    },
                },
            )
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //[DELETE] warrantyCenter/deleteWarrantyCenter/:id
    deleteWarrantyCenter(req, res, next) {
        const id = req.params.id;
        warrantyCenter
            .destroy({
                where: {
                    id: id,
                },
            })
            .then((data) => {
                res.status(200).send('Xoá thành công');
            })
            .catch((err) => {
                res.status(500).send('Xoá thất bại');
            });
    }

    //lấy ra những sản phẩm mà trung tâm bảo hành đã sửa chữa
    //[GET] warrantyCenter/repaired
    getAllProductsRepaired(req, res, next) {
        const userId = req.userId;

        warrantyCenter
            .findOne({
                where: {
                    managerID: userId,
                },
            })
            .then((WC) => {
                WC.getSendWarranties({
                    where: {
                        deletedAt: {
                            [Op.ne]: null,
                        },
                    },
                    paranoid: false,
                })
                    .then((data) => {
                        res.status(200).send(data);
                    })
                    .catch((err) => {
                        res.status(500).send(err);
                    });
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //[GET] /warrantyCenter/DSBH
    getDSBH(req, res, next) {
        const userId = req.userId;
        
        warrantyCenter.findOne({
            where: {
                managerID: userId,
            }
        })
        .then((WC) => {
            WC.getSendWarranties({raw: true})
            .then(async (sendAll) => {
                
                for(let i = 0; i < sendAll.length; i++) {
                    
                    var nameAgent = await sequelize.query(`SELECT agents.name as nameAgent
                                                    FROM agents
                                                    WHERE agents.id = ${sendAll[i].agentID};
                                                         `,
                                                        { type: QueryTypes.SELECT, raw:true},);
                    
                     sendAll[i].nameAgent = nameAgent[0].nameAgent;
                }
                // res.status(200).send(sendAll)
                res.render('warrantyCenter/DSProductWarranty.hbs', {sendAll, isShow: true})
            })
            .catch((err) => {
                console.log('sai')
                res.status(500).send(err);
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        // res.render('warrantyCenter/DSProductWarranty.hbs', {isShow: true})
    }


    //[GET] /warrantyCenter/tkbh
    getInterTKBH(req, res, next){
        res.render('warrantyCenter/tkbh.hbs', {isShow: true})
    }

}
module.exports = new warrantyCenterController();
