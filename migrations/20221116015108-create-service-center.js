'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('serviceCenters', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            managerID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'managers',
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
        await queryInterface.dropTable('serviceCenters');
    },
};
