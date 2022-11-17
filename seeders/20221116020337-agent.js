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
        return await queryInterface.bulkInsert('Agents', [
            {
                name: 'Đại lý honda Cầu giấy',
                address: 'Mai Dịch, Cầu giấy, Hà Nội',
                phone: '0943945433',
                email: 'hondaCauGiay@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Đại lý honda Thủ Đưc',
                address: 'quận Thủ Đưc,TP HCM',
                phone: '0943945433',
                email: 'hondaCauGiay@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return await queryInterface.bulkDelete('Agents', null, {});
    },
};
