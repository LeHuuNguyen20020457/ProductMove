const { ManufactureFactory } = require('../models');

class manufactureFactoryController {
    //[GET] /manufactureFactory
    getAllManufactureFactory(req, res, next) {
        ManufactureFactory.getAll()
            .then((MFs) => res.status(200).send(MFs))
            .catch((err) => res.status(500).send(err));
    }

    // lấy thông tin của 1 cơ sở sản xuất
    //[GET] /manufactureFactory/:id
    getManufactureFactory(req, res, next) {
        const id = req.params.id;

        ManufactureFactory.findOne({
            where: {
                id: id,
            },
        })
            .then((MF) => {
                res.status(200).send(MF);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

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

    // lấy ra các nhà kho của cơ sở sản xuất này
    //[GET]
    // getWarehouse(req, res, next) {
    //     const id = req.id;
    // }
}
module.exports = new manufactureFactoryController();
