'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SendWarranty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Product, Agent, warrantyCenter }) {
            // define association here

            this.belongsTo(Product, { foreignKey: 'productID' });
            this.belongsTo(Agent, { foreignKey: 'agentID' });
            this.belongsTo(warrantyCenter, { foreignKey: 'warrantyCenterID' });
        }
    }
    SendWarranty.init(
        {
            description: DataTypes.STRING,
            deletedAt: {
                type: DataTypes.DATE,
                defaultValue: null,
            },
        },
        {
            sequelize,
            modelName: 'SendWarranty',
            paranoid: true,
        },
    );
    return SendWarranty;
};
