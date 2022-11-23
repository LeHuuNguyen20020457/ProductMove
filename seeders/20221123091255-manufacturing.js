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
        await queryInterface.bulkInsert(
            'manufacturings',
            [
                {
                    manufactureFactoryID: 1,
                    codeProductLine: 'WinnerX150',
                    amount: 150,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    manufactureFactoryID: 1,
                    codeProductLine: 'SH125',
                    amount: 250,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    manufactureFactoryID: 2,
                    codeProductLine: 'WA110',
                    amount: 300,
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
        return await queryInterface.bulkDelete('manufacturings', null, {});
    },
};
