const { Manufacturing, ManufactureFactory, productLine, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

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

    //[POST] manufacturing/getAll
    getAllManufacturings(req, res, next) {
        const {month, quarter} = req.body;
        
        const userId = req.userId;

        ManufactureFactory.findOne({
            where: {
                managerID: userId,
            },
        })
            .then((MF) => {
                MF.getManufacturings({raw: true,})
                    .then(async (manufacturings) => {
                       
                        for(let i = 0; i < manufacturings.length; i++){
                            var data = await sequelize.query(`SELECT PL.codeProductLine, PL.nameProductLine
                                                                FROM productlines AS PL
                                                                WHERE "${manufacturings[i].codeProductLine}" = PL.codeProductLine;`,
                                                                { type: QueryTypes.SELECT, raw: true})
                            manufacturings[i].codeProductLine = data[0].codeProductLine
                            manufacturings[i].nameProductLine = data[0].nameProductLine
                        }
                        
                        if(month) {
                            var data = []
                            for(let i = 0; i < manufacturings.length; i++) {
                                if(manufacturings[i].createdAt.getMonth() + 1 === Number(month) && manufacturings[i].createdAt.getFullYear() === 2022)
                                {
                                    manufacturings[i].createdAt = manufacturings[i].createdAt.toLocaleDateString("es-CL")
                                    data.push(manufacturings[i])
                                }
                            }
                            res.render('cssx/tableTKSX.hbs', {month, data})
                        }

                        if(quarter) {
                            var data = []
                            for(let i = 0; i < manufacturings.length; i++){
                               
                                if(manufacturings[i].createdAt.getMonth() + 1 >= 3*Number(quarter) - 2
                                && manufacturings[i].createdAt.getMonth() + 1 <= 3*Number(quarter)
                                && manufacturings[i].createdAt.getFullYear() === 2022)
                                {
                                    manufacturings[i].createdAt = manufacturings[i].createdAt.toLocaleDateString("es-CL")
                                    data.push(manufacturings[i])
                                }
                            }
                            res.render('cssx/tableTKSX.hbs', {quarter, data})
                        }
                    })
                    .catch((err) => {
                        res.status(500).send(err);
                    });
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    getInterTKSX(req, res, next){
        res.render('cssx/tksx.hbs', {isShow: true})
    }
}

module.exports = new manufacturingController();
