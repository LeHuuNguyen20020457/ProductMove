'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class productDelivery extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Agent, Warehouse, productLine }) {
            // define association here
            this.belongsTo(Agent, { foreignKey: 'agentID' });
            this.belongsTo(Warehouse, { foreignKey: 'warehouseID' });
            this.belongsTo(productLine, { foreignKey: 'codeProductLine' });
        }
    }
    productDelivery.init(
        {
            warehouseID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            agentID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            codeProductLine: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            amount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'productDelivery',
        },
    );
    return productDelivery;
};
