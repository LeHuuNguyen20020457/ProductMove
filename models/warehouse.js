'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Warehouse extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ ManufactureFactory, Agent, productLine }) {
            // define association here
            this.belongsTo(ManufactureFactory, { foreignKey: 'idOfCssxOrDl', constraints: false });
            this.belongsTo(Agent, { foreignKey: 'idOfCssxOrDl', constraints: false });

            this.hasMany(productLine, { foreignKey: 'warehouseID' });
        }
    }
    Warehouse.init(
        {
            name: DataTypes.STRING,
            idOfCssxOrDl: DataTypes.INTEGER,
            warehouseType: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Warehouse',
        },
    );

    // Warehouse.addHook('afterFind', (findResult) => {
    //     if (!Array.isArray(findResult)) findResult = [findResult];
    //     for (const instance of findResult) {
    //         if (instance.warehouseType === 'manufactureFactory' && instance.manufacturefactory !== undefined) {
    //             instance.commentable = instance.manufactureFactory;
    //         } else if (instance.warehouseType === 'agent' && instance.agent !== undefined) {
    //             instance.commentable = instance.agent;
    //         }
    //         // To prevent mistakes:
    //         delete instance.manufacturefactory;
    //         delete instance.dataValues.manufacturefactory;
    //         delete instance.agent;
    //         delete instance.dataValues.agent;
    //     }
    // });
    return Warehouse;
};
