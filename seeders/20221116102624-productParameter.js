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
            'ProductParameters',
            [
                {
                    codeProductLine: 'WinnerX150',
                    weight: '122kg',
                    PetrolTankCapacity: '4,5 lít',
                    maximumCapacity: '11,5kW/9.000 vòng/phút',
                    fuelConsumption: '1,99l/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'SH125',
                    weight: '116 kg',
                    PetrolTankCapacity: '5,6 lít',
                    maximumCapacity: '8,2kW/8500 vòng/phút',
                    fuelConsumption: '2,16 lít/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'WA110',
                    weight: '97 kg',
                    PetrolTankCapacity: '3,7 L',
                    maximumCapacity: '6,12kW/7.500rpm',
                    fuelConsumption: '1,90 l/100km',
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
        return await queryInterface.bulkDelete('ProductParameters', null, {});
    },
};
