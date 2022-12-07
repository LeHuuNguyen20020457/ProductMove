'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Buys', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            timeToBuy: {
                type: Sequelize.DATE,
            },

            customerID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'customers',
                    key: 'id',
                },
            },
            productID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Products',
                    key: 'id',
                },
            },
            deletedAt: {
                type: Sequelize.DATE,
                defaultValue: null,
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
        await queryInterface.dropTable('Buys');
    },
};
