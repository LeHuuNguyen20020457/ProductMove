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
            'ProductLines',
            [
                {
                    codeProductLine: 'WinnerX150',
                    amount: 1000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'SH125',
                    amount: 2000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'WA110',
                    amount: 2000,
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
        return await queryInterface.bulkDelete('ProductLines', null, {});
    },
};
