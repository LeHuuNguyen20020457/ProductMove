'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Agent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Manager, Product, Warehouse }) {
            // define association here
            this.belongsTo(Manager, { foreignKey: 'managerID' });

            this.hasMany(Product, { foreignKey: 'AgentID' });

            this.hasMany(Warehouse, {
                foreignKey: 'idOfCssxOrDl',
                constraints: false,
                scope: {
                    warehouseType: 'agent',
                },
            });
        }
    }
    Agent.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                validate: {
                    len: [2, 20],
                },
            },
            address: {
                type: DataTypes.STRING,
                validate: {
                    checkLeng(value) {
                        if (value.length <= 2 || value.length > 100) {
                            throw new Error('Bạn cần nhập đúng địa chỉ');
                        }
                    },
                },
            },
            phone: {
                type: DataTypes.STRING,
                validate: {
                    checkLeng(value) {
                        if (value.length <= 8 || value.length >= 12) {
                            throw new Error('Bạn cần nhập đúng số điện thoại');
                        }
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                },
            },
        },
        {
            sequelize,
            modelName: 'Agent',
        },
    );
    return Agent;
};
