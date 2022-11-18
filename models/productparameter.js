'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class productParameter extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Product }) {
            // define association here
        }
    }
    productParameter.init(
        {
            weight: DataTypes.STRING,
            PetrolTankCapacity: DataTypes.STRING,
            maximumCapacity: DataTypes.STRING,
            fuelConsumption: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'productParameter',
        },
    );
    return productParameter;
};
