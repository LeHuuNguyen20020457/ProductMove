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
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'manufactureFactory1',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'manufactureFactory2',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'manufactureFactory3',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'agent1',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'agent2',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'agent3',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                username: 'serviceCenter1',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'serviceCenter2',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'serviceCenter3',
                password: '123456',
                avatar: 'https://i.pinimg.com/236x/74/28/f9/7428f98c30ae41c9c33d69ab05ed6d0b.jpg',
                phone: '0976283343',
                email: 'luuly@gmail.com',
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
