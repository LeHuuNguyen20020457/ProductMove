'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        return await queryInterface.bulkInsert(
            'Inventories',
            [
                {
                    warehouseID: 1,
                    codeProductLine: 'WinnerX150',
                    inventoryNumber: 150,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    warehouseID: 1,
                    codeProductLine: 'SH125',
                    inventoryNumber: 100,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    warehouseID: 2,
                    codeProductLine: 'SH125',
                    inventoryNumber: 150,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    warehouseID: 3,
                    codeProductLine: 'WA110',
                    inventoryNumber: 150,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    warehouseID: 4,
                    codeProductLine: 'WA110',
                    inventoryNumber: 150,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         *
         */
        return await queryInterface.bulkDelete('Inventories', null, {});
    },
};
