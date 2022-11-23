'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Inventory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ productLine, Warehouse }) {
            // define association here

            this.belongsTo(productLine, { foreignKey: 'codeProductLine' });
            this.belongsTo(Warehouse, { foreignKey: 'warehouseID' });
        }
    }
    Inventory.init(
        {
            inventoryNumber: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Inventory',
        },
    );
    return Inventory;
};
