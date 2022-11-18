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
                    nameProduct: 'WINNER X',
                    price: '46.160.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/November2022/2dwchf2M2JLrYDXSFgxe.png',
                    warrantyPeriod: '1 năm',
                    description:
                        'Cuộc đời là một cuộc phiêu lưu tràn đầy những điều bất ngờ và mỗi người đều có một vạch đích của riêng mình. Hãy tự tin tạo những cú kích để vút xa và tạo dấu ấn riêng biệt cùng Honda WINNER X mới. Đánh dấu sự chuyển mình mạnh mẽ hướng tới hình ảnh một mẫu siêu xe thể thao cỡ nhỏ hàng đầu tại Việt Nam cùng những trang bị hiện đại và tối tân, WINNER X mới sẵn sàng cùng các tay lái bứt tốc trên mọi hành trình khám phá',
                    codeProductLineID: 1,
                    codeAgent: 'CA1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nameProduct: 'SH Mode 125cc',
                    price: '56.641.091',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/October2022/cA6JDbziJ4V6vcmKJR8h.png',
                    warrantyPeriod: '1 năm',
                    description:
                        'Thuộc phân khúc xe ga cao cấp và thừa hưởng thiết kế sang trọng nổi tiếng của dòng xe SH, Sh mode luôn được đánh giá cao nhờ kiểu dáng sang trọng, tinh tế tới từng đường nét, động cơ tiên tiến và các tiện nghi cao cấp xứng tầm phong cách sống thời thượng, đẳng cấp.',
                    codeProductLineID: 2,
                    codeAgent: 'CA2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nameProduct: 'Wave Alpha 110cc',
                    price: '17.859.273',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/August2022/tJv8IkxW4hKAUNngDX5v.png',
                    warrantyPeriod: '1 năm',
                    description:
                        'Wave Alpha phiên bản 2023 trẻ trung và năng động với màu đen mờ hoàn toàn mới cùng thiết kế bộ tem mới ấn tượng, thu hút ánh nhìn, cho bạn tự tin thể hiện cá tính của mình trên mọi hành trình.',
                    codeProductLineID: 3,
                    codeAgent: 'CA2',
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
