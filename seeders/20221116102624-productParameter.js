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
                {
                    codeProductLine: 'VARIO160',
                    weight: '117 kg',
                    PetrolTankCapacity: '5,5 L',
                    maximumCapacity: '11,3kW/8.500 vòng/phút',
                    fuelConsumption: '2,20 lít/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'VISION',
                    weight: '94 kg',
                    PetrolTankCapacity: '4,9 L',
                    maximumCapacity: '6,59 kW/7.500 rpm',
                    fuelConsumption: '1,85 l/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CBR500R2022',
                    weight: '192 kg',
                    PetrolTankCapacity: '17,1 lít',
                    maximumCapacity: '35 kW tại 8.600 vòng/phút',
                    fuelConsumption: '43 Nm tại 6.500 vòng/phút',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CB150R',
                    weight: '126 kg',
                    PetrolTankCapacity: '8,5 L',
                    maximumCapacity: '12,0kW/9.500rpm',
                    fuelConsumption: '2,79 l/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'Rebel500',
                    weight: '190 kg',
                    PetrolTankCapacity: '11,2 Lít',
                    maximumCapacity: '33,5kW @ 8500 vòng/phút',
                    fuelConsumption: '3,42 lít/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'Gold2022',
                    weight: '233 Kg',
                    PetrolTankCapacity: '13,6 lít',
                    maximumCapacity: '64 kW tại 7.000 vòng/phút',
                    fuelConsumption: '5,3 l/100 km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CubC125',
                    weight: '109 kg',
                    PetrolTankCapacity: '3,7 lít',
                    maximumCapacity: '6,87kW/7.500 vòng/phút',
                    fuelConsumption: '1,50l/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'ATAS1021',
                    weight: '240 kg',
                    PetrolTankCapacity: '24,8 lít',
                    maximumCapacity: '75kW/ 7.500 vòng/ phút',
                    fuelConsumption: '4,75 lít/100km',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CBR1000RR-R',
                    weight: '201 kg',
                    PetrolTankCapacity: '16,1 lít',
                    maximumCapacity: '160Kw/14.500 vòng/phút',
                    fuelConsumption: '6,3 lít / 100km',
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
