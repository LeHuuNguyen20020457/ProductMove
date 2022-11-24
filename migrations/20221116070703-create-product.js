'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            codeProductLine: {
                type: Sequelize.STRING,
                references: {
                    model: 'productlines',
                    key: 'codeProductLine',
                },
            },
            AgentID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'agents',
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
        await queryInterface.dropTable('Products');
    },
};
