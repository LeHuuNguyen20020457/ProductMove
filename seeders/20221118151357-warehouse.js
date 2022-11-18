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
            'Warehouses',
            [
                {
                    name: 'Kho A1 của CSSX1',
                    idOfCssxOrDl: 1,
                    warehouseType: 'manufactureFactory',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Kho A2 của CSSX1',
                    idOfCssxOrDl: 1,
                    warehouseType: 'manufactureFactory',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Kho A3 của CSSX2',
                    idOfCssxOrDl: 2,
                    warehouseType: 'manufactureFactory',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Kho A4 của CSSX2',
                    idOfCssxOrDl: 2,
                    warehouseType: 'manufactureFactory',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Kho B1 của DL1',
                    idOfCssxOrDl: 1,
                    warehouseType: 'agent',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Kho B2 của DL1',
                    idOfCssxOrDl: 1,
                    warehouseType: 'agent',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Kho B3 của DL2',
                    idOfCssxOrDl: 2,
                    warehouseType: 'agent',
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
         * await queryInterface.bulkDelete('People', null, {});
         */
        return await queryInterface.bulkDelete('Warehouses', null, {});
    },
};
