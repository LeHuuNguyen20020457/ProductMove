'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manufacturing extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ ManufactureFactory, productLine }) {
            // define association here
            this.belongsTo(ManufactureFactory, { foreignKey: 'manufactureFactoryID' });
            this.belongsTo(productLine, { foreignKey: 'codeProductLine' });
        }
    }
    Manufacturing.init(
        {
            amount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Manufacturing',
        },
    );
    return Manufacturing;
};
