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
            nameProduct: {
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
            codeProductLineID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'productlines',
                    key: 'id',
                },
            },
            codeAgent: {
                type: Sequelize.STRING,
                references: {
                    model: 'agents',
                    key: 'codeAgent',
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
        await queryInterface.dropTable('Products');
    },
};
