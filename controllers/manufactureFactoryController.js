const { ManufactureFactory } = require('../models');
class manufactureFactoryController {
    //[POST] /manufactureFactory/createManufactureFactory
    createManufactureFactory(req, res, next) {
        const { name, address, phone, email, managerID } = req.body;

        ManufactureFactory.create({
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

    //[PUT] manufactureFactory/updateManufactureFactory/:id
    updateManufactureFactory(req, res, next) {
        const { name, address, phone, email, managerID } = req.body;
        const id = req.params.id;
        ManufactureFactory.update(
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

    //[DELETE] /manufactureFactory/deleteManufactureFactory/:id
    deleteManufactureFactory(req, res, next) {
        const id = req.params.id;
        res.send(id);
        ManufactureFactory.destroy({
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
module.exports = new manufactureFactoryController();
