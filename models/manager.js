'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manager extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Manager.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [2, 20],
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: null,
            },
            avatar: DataTypes.STRING,
            phone: {
                type: DataTypes.STRING,
                len: [9, 12],
            },
            email: {
                type: DataTypes.STRING,
                isEmail: true,
            },
        },
        {
            sequelize,
            modelName: 'Manager',
        },
    );
    return Manager;
};
