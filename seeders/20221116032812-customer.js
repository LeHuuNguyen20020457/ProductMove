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
            'Customers',
            [
                {
                    name: 'Nguyen',
                    phone: '09347923423',
                    deletedAt: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Quan',
                    phone: '09348348334',
                    deletedAt: new Date(),
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
        return await queryInterface.bulkDelete('Customers', null, {});
    },
};
