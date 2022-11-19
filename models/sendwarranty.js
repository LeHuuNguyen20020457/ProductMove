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
            productStatus: {
                type: DataTypes.INTEGER,
                validate: {
                    //0 là đang sữa chữa
                    //1 là đã sửa chữa xong
                    //2 là sản phẩm không thể sửa được
                    isIn: [[0, 1, 2]],
                },
            },
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'SendWarranty',
        },
    );
    return SendWarranty;
};
