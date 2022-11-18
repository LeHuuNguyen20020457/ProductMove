'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Buy, Product }) {
            // define association here
            this.hasMany(Buy, { foreignKey: 'customerID' });
            this.belongsToMany(Product, { through: Buy, foreignKey: 'productID', otherKey: 'customerID' });
        }
    }
    Customer.init(
        {
            name: DataTypes.STRING,
            phone: {
                type: DataTypes.STRING,
                len: [9, 12],
            },
        },
        {
            sequelize,
            modelName: 'Customer',
        },
    );
    return Customer;
};
