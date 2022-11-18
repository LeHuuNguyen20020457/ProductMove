'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Buy, Customer, Agent, productLine, productParameter }) {
            // define association here
            this.hasMany(Buy, { foreignKey: 'productID' });
            this.belongsToMany(Customer, { through: Buy, foreignKey: 'productID', otherKey: 'customerID' });

            this.belongsTo(productLine, { foreignKey: 'codeProductLineID' });
            this.belongsTo(Agent, { foreignKey: 'codeAgent' });
        }
    }
    Product.init(
        {
            nameProduct: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.STRING,
                validate: {
                    isInt: true,
                    checkPrice(value) {
                        if (value < 0) {
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
            modelName: 'Product',
        },
    );
    return Product;
};
