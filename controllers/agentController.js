const { Agent, warrantyCenter } = require('../models');
const { Op } = require('sequelize');
class agentController {
    //[GET] /agent
    getAllAgent(req, res, next) {
        Agent.findAll({raw: true})
            .then((agents) =>
                res.render('parts', {agents: agents, isShow: true})
            //  res.status(200).json(agents)
            )
            .catch((err) => res.status(500).send(err));
    }

    //[GET] /agent/:id
    getAgent(req, res, next) {
        const id = req.params.id;

        Agent.findOne({
            where: {
                id: id,
            },
        })
            .then((agent) => {
                res.status(200).json(agents);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //[POST] /agent/createAgent
    createAgent(req, res, next) {
        const { name, address, phone, email, managerID } = req.body;
        
        Agent.create({
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

    //[POST] /agent/updateAgent/:id
    updateAgent(req, res, next) {
        const { name, address, phone, email, managerID } = req.body;
        const id = req.params.id;
        Agent.update(
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

    //[DELETE] /agent/deleteAgent/:id
    deleteAgent(req, res, next) {
        const id = req.params.id;
        Agent.destroy({
            where: {
                id: id,
            },
        })
            .then((data) => {
                res.status(200).send('Xo?? th??nh c??ng');
            })
            .catch((err) => {
                res.status(500).send('Xo?? th???t b???i');
            });
    }

    //[GET]
    getAllProductsSold(req, res, next) {
        const userId = req.userId;

        Agent.findOne({
            where: {
                managerID: userId,
            },
        })
            .then((agent) => {
                agent
                    .getProducts({
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

    //[GET] /agent/warranty/search
    getInterWarranty(req, res, next) {
        res.render('agent/warranty.hbs', {isShow: true})
    }

    //[POST] agent/billWarranty
    interBillWarranty(req, res, next) {
        const {codeProduct, nameProduct, nameCustomer, phoneCustomer, codeSKU} = req.body;
        
        warrantyCenter.findAll({raw: true})
        .then((warrantyCenters) =>{
            res.render('agent/phieubaohanh.hbs', {
                warrantyCenters,
                codeProduct,
                nameProduct,
                nameCustomer,
                phoneCustomer,
                codeSKU,
            }, function(err, html){
                if(err) res.status(500).send()
                res.status(200).send(html)
            })
        })
        .catch((err) => res.status(500).send(err));
    }
}
module.exports = new agentController();
