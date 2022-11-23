'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Inventories', {
            warehouseID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'warehouses',
                    key: 'id',
                },
            },
            codeProductLine: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'productlines',
                    key: 'codeProductLine',
                },
            },
            inventoryNumber: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Inventories');
    },
};
