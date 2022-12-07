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
        return await queryInterface.bulkInsert('Managers', [
            {
                username: 'Admin',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'Admin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'manufactureFactory1',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'ManufactureFactory',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'manufactureFactory2',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'tuhao@gmail.com',
                role: 'ManufactureFactory',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'manufactureFactory3',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'caocao@gmail.com',
                role: 'ManufactureFactory',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'agent1',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'Agent',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'agent2',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'Agent',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'agent3',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'Agent',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                username: 'warrantyCenter1',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'warrantyCenter',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'warrantyCenter2',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'warrantyCenter',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'warrantyCenter3',
                password: 'e10adc3949ba59abbe56e057f20f883e',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                role: 'warrantyCenter',
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
        return await queryInterface.bulkDelete('Managers', null, {});
    },
};
