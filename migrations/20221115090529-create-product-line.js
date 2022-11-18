'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('productLines', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            codeProductLine: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            amount: {
                type: Sequelize.INTEGER,
            },
            manufactureFactoryID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'manufacturefactories',
                    key: 'id',
                },
            },
            warehouseID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'warehouses',
                    key: 'id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('productLines');
    },
};
