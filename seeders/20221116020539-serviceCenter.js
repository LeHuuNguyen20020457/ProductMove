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
        return await queryInterface.bulkInsert('serviceCenters', [
            {
                name: 'Công ty Honda Thắng Lợi',
                address: '25 Trần Khánh Dư, Hoàn Kiếm, Hà Nội.',
                phone: '02439342961',
                email: 'thangloi@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Trung tâm bảo dưỡng đồ chơi & độ xe SH Việt Nam – Scoote',
                address: 'Số 38 P.Trung Phụng, Phương Liên, Đống Đa, Hà Nội',
                phone: '090 966 6629',
                email: 'scoote@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Trung tâm sửa chữa bảo dưỡng xe máy MOTOTECH',
                address: '167 Kim Ngưu – Hai Bà Trưng – HN',
                phone: '02466847601',
                email: 'mototech@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Trung tâm bảo dưỡng xe máy Tân Việt Motor',
                address: '4A Tân Mai, phường Tân Mai, Hoàng Mai Hà Nội',
                phone: '02436626426',
                email: 'TanVietMotor@gmail.com',
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
        return await queryInterface.bulkDelete('serviceCenters', null, {});
    },
};
