'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Buy extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Customer, Product }) {
            // define association here
            this.belongsTo(Customer, { foreignKey: 'customerID' });
            this.belongsTo(Product, { foreignKey: 'productID' });
        }
    }
    Buy.init(
        {
            timeToBuy: new Date(),
            deletedAt: {
                type: DataTypes.DATE,
                defaultValue: null,
            },
        },
        {
            sequelize,
            modelName: 'Buy',
            paranoid: true,
        },
    );
    return Buy;
};
