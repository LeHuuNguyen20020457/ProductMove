'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Buy extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Buy.init(
        {
            timeToBuy: new Date(),
            statusProduct: {
                type: DataTypes.STRING,
                isIn: [['good', 'insurance', 'error']],
            },
        },
        {
            sequelize,
            modelName: 'Buy',
        },
    );
    return Buy;
};
