'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class productLine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Product, Warehouse, Inventory, Manufacturing, ManufactureFactory }) {
            // define association here
            this.hasMany(Product, { foreignKey: 'codeProductLine' });

            this.hasMany(Inventory, { foreignKey: 'codeProductLine' });

            this.belongsToMany(Warehouse, {
                through: Inventory,
                foreignKey: 'codeProductLine',
                otherKey: 'warehouseID',
            });

            this.hasMany(Manufacturing, { foreignKey: 'codeProductLine' });

            this.belongsToMany(ManufactureFactory, {
                through: Manufacturing,
                foreignKey: 'codeProductLine',
                otherKey: 'manufactureFactoryID',
            });
        }
    }
    productLine.init(
        {
            codeProductLine: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            nameProductLine: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.STRING,
                validate: {
                    checkPrice(value) {
                        if (value.length < 3) {
                            throw new Error('Nhập đúng giá sản phẩm');
                        }
                    },
                },
            },
            avatar: DataTypes.STRING,
            warrantyPeriod: DataTypes.STRING,

            description: DataTypes.STRING(1234),
        },
        {
            sequelize,
            modelName: 'productLine',
        },
    );
    return productLine;
};
