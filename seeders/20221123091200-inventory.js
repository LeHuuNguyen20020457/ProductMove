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

        // return await queryInterface.bulkInsert(
        //     'Inventories',
        //     [
                
        //     ],
        //     {},
        // );
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
