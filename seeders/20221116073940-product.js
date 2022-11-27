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
        return queryInterface.bulkInsert(
            'Products',
            [
                {
                    codeProductLine: 'WinnerX150',
                    AgentID: 1,
                    deletedAt: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'SH125',
                    AgentID: 1,
                    deletedAt: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'WA110',
                    AgentID: 2,
                    deletedAt: null,
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
        return await queryInterface.bulkDelete('Products', null, {});
    },
};
