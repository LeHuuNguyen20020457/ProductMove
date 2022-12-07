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
            'Buys',
            [
                {
                    timeToBuy: '2022-11-17 13:36:23',
                    productID: 1,
                    customerID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    timeToBuy: '2022-11-17 13:36:23',
                    productID: 2,
                    customerID: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                // {
                //     timeToBuy: '2022-11-17 13:36:23',
                //     productID: 3,
                //     customerID: 2,
                //     createdAt: new Date(),
                //     updatedAt: new Date(),
                // },
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
        return await queryInterface.bulkDelete('Buys', null, {});
    },
};
