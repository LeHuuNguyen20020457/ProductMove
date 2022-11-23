'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Manufacturings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            manufactureFactoryID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'manufacturefactories',
                    key: 'id',
                },
            },

            codeProductLine: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'productlines',
                    key: 'codeProductLine',
                },
            },

            amount: {
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
        await queryInterface.dropTable('Manufacturings');
    },
};
