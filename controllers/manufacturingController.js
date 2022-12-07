const { Manufacturing, ManufactureFactory } = require('../models');

class manufacturingController {
    //Admin yêu cầu sản xuất
    //[POST] /manufacturing/createManufacturing
    createManufacturing(req, res, next) {
        const { manufactureFactoryID, codeProductLine, amount } = req.body;
        Manufacturing.create({
            manufactureFactoryID: manufactureFactoryID,
            codeProductLine: codeProductLine,
            amount: +amount,
        })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    //[GET] manufacturing/getAll
    getAllManufacturings(req, res, next) {
        const userId = req.userId;

        ManufactureFactory.findOne({
            where: {
                managerID: userId,
            },
        })
            .then((MF) => {
                MF.getManufacturings()
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
}

module.exports = new manufacturingController();
