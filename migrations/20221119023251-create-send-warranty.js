'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('SendWarranties', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            productID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id',
                },
            },
            agentID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'agents',
                    key: 'id',
                },
            },
            warrantyCenterID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'warrantyCenters',
                    key: 'id',
                },
            },
            description: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('SendWarranties');
    },
};
