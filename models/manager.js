'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manager extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ ManufactureFactory, Agent, warrantyCenter }) {
            // define association here
            this.hasOne(ManufactureFactory, { foreignKey: 'managerID' });
            this.hasOne(Agent, { foreignKey: 'managerID' });
            this.hasOne(warrantyCenter, { foreignKey: 'managerID' });
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
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [['ManufactureFactory', 'Agent', 'warrantyCenter', 'Admin']],
                },
            },
        },
        {
            sequelize,
            modelName: 'Manager',
        },
    );
    return Manager;
};
