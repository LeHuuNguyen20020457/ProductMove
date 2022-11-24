const { Manufacturing } = require('../models');

class manufacturingController {
    //[POST] /manufacturing/createManufacturing
    createManufacturing(req, res, next) {
        const { manufactureFactoryID, codeProductLine, amount } = require.body;
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
}

module.exports = new manufacturingController();
