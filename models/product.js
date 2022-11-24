'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Buy, Customer, Agent, productLine, productParameter, SendWarranty }) {
            // define association here
            this.hasMany(Buy, { foreignKey: 'productID' });
            this.belongsToMany(Customer, { through: Buy, foreignKey: 'productID', otherKey: 'customerID' });

            this.belongsTo(productLine, { foreignKey: 'codeProductLine' });
            this.belongsTo(Agent, { foreignKey: 'AgentID' });

            this.hasMany(SendWarranty, { foreignKey: 'productID' });
        }
    }
    Product.init(
        { deletedAt: DataTypes.DATE },
        {
            sequelize,
            modelName: 'Product',
            paranoid: true,
        },
    );
    return Product;
};
