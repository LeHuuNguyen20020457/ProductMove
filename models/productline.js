'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class productLine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Product, ManufactureFactory, Warehouse }) {
            // define association here
            this.hasMany(Product, { foreignKey: 'codeProductLineID' });

            this.belongsTo(ManufactureFactory, { foreignKey: 'manufactureFactoryID' });

            this.belongsTo(Warehouse, { foreignKey: 'warehouseID' });
        }
    }
    productLine.init(
        {
            codeProductLine: {
                type: DataTypes.STRING,
            },

            amount: {
                type: DataTypes.INTEGER,
                validate: {
                    checkAmount(value) {
                        if (value < 0) {
                            throw new Error('Bạn cần nhập đúng số lượng sản phẩm');
                        }
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'productLine',
        },
    );
    return productLine;
};
