const { warrantyCenter } = require('../models');
class warrantyCenterController {
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
}
module.exports = new warrantyCenterController();
