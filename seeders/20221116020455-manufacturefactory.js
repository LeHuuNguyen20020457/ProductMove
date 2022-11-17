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
        return await queryInterface.bulkInsert('Manufacturefactories', [
            {
                name: 'Cơ sở sản xuất Honda số 1',
                address: 'Phúc Thắng, Phúc Yên, Vĩnh Phúc',
                phone: '0943234233',
                email: 'hondaVietNam@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Cơ sở sản xuất Honda số 2',
                address: 'Đồng Văn, Duy Tiên, Hà Nam',
                phone: '09435335433',
                email: 'hondaVietNam@gmail.com',
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
        return await queryInterface.bulkDelete('Manufacturefactories', null, {});
    },
};
