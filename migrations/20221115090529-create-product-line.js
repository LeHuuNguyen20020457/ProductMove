'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('productLines', {
            codeProductLine: {
                primaryKey: true,
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameProductLine: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.STRING,
            },
            avatar: {
                type: Sequelize.STRING,
            },
            warrantyPeriod: {
                type: Sequelize.STRING,
            },

            description: {
                type: Sequelize.STRING(1234),
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
