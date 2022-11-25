const { Agent } = require('../models');
class agentController {
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
                res.status(200).send('Xoá thành công');
            })
            .catch((err) => {
                res.status(500).send('Xoá thất bại');
            });
    }
}
module.exports = new agentController();
