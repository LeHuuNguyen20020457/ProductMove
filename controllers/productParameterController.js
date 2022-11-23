const { productParameter } = require('../models');
class productParameterController {
    createProductParameters(req, res, next) {
        const codeProductLine = req.params.codeProductLine;
        const { weight, PetrolTankCapacity, maximumCapacity, fuelConsumption } = req.body;
        productParameter
            .create({
                codeProductLine,
                weight,
                PetrolTankCapacity,
                maximumCapacity,
                fuelConsumption,
            })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}

module.exports = new productParameterController();
