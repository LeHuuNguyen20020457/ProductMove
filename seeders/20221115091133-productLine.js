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
            'ProductLines',
            [
                {
                    codeProductLine: 'WinnerX150',
                    nameProductLine: 'WINNER X',
                    price: '46.160.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/November2022/46saHiwobvOBrrwwWMXj.png',
                    warrantyPeriod: 1,

                    description:
                        'Cuộc đời là một cuộc phiêu lưu tràn đầy những điều bất ngờ và mỗi người đều có một vạch đích của riêng mình. Hãy tự tin tạo những cú kích để vút xa và tạo dấu ấn riêng biệt cùng Honda WINNER X mới. Đánh dấu sự chuyển mình mạnh mẽ hướng tới hình ảnh một mẫu siêu xe thể thao cỡ nhỏ hàng đầu tại Việt Nam cùng những trang bị hiện đại và tối tân, WINNER X mới sẵn sàng cùng các tay lái bứt tốc trên mọi hành trình khám phá',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'SH125',
                    nameProductLine: 'SH Mode 125cc',
                    price: '56.641.091',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/October2022/cA6JDbziJ4V6vcmKJR8h.png',
                    warrantyPeriod: 2,
                    description:
                        'Thuộc phân khúc xe ga cao cấp và thừa hưởng thiết kế sang trọng nổi tiếng của dòng xe SH, Sh mode luôn được đánh giá cao nhờ kiểu dáng sang trọng, tinh tế tới từng đường nét, động cơ tiên tiến và các tiện nghi cao cấp xứng tầm phong cách sống thời thượng, đẳng cấp.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'WA110',
                    nameProductLine: 'Wave Alpha 110cc',
                    price: '17.859.273',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/August2022/tJv8IkxW4hKAUNngDX5v.png',
                    warrantyPeriod: 1,
                    description:
                        'Wave Alpha phiên bản 2023 trẻ trung và năng động với màu đen mờ hoàn toàn mới cùng thiết kế bộ tem mới ấn tượng, thu hút ánh nhìn, cho bạn tự tin thể hiện cá tính của mình trên mọi hành trình.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'VARIO160',
                    nameProductLine: 'Honda VARIO 160',
                    price: '51.690.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/December2022/N2FioUaXiDSM4QD0MARS.png',
                    warrantyPeriod: 2,
                    description:
                        'Lần đầu tiên được Honda Việt Nam giới thiệu, với thiết kế của mẫu xe ga thể thao độc đáo, năng động và linh hoạt trên từng cung đường, động cơ eSP+ 4 van 160cc đầy uy lực cùng những tiện ích vượt trội; VARIO 160 hứa hẹn sẽ mang lại những trải nghiêm vô cùng ấn tượng cho khách hàng luôn sống hết mình với đam mê.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'VISION',
                    nameProductLine: 'Honda Vision',
                    price: '30.721.091',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/November2022/CSnVniovN2gIy7dPZzmg.jpg',
                    warrantyPeriod: 1,
                    description:
                        'Thuộc phân khúc xe tay ga phổ thông, Vision luôn là mẫu xe quốc dân được yêu thích, đặc biệt trong giới trẻ nhờ kiểu dáng thời trang, trẻ trung và nhỏ gọn, khả năng tiết kiệm nhiên liệu vượt trội và vô cùng bền bỉ.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CBR500R2022',
                    nameProductLine: 'Honda CBR500R 2022',
                    price: '192.490.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg',
                    warrantyPeriod: 3,
                    description:
                        'CBR500R - UY LỰC TỐC ĐỘ, SẴN SÀNG TIẾN TỚI Cho dù bạn đang lựa chọn chiếc xe sport đầu tiên để bắt đầu hành trình đam mê hay bạn là tay lái nhiều kinh nghiệm đang tìm kiếm cảm giác phấn khích từ một chiếc xe nhỏ hơn, CBR500R đều có thể thỏa mãn nhu cầu của bạn. Với kích thước nhỏ gọn và thiết kế thể thao, CBR500R thỏa sức để bạn khám phá khả năng cầm lái trên những cung đường đèo uốn lượn. Động cơ phản hồi nhanh nhạycới từng cú vặn ga và bất kì tác động nào từ người điều khiển, cho bạn tận hưởng từng khoảnh khắc sống động mỗi khi cầm lái.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CB150R',
                    nameProductLine: 'CB150R The Streetster',
                    price: '105.500.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/May2022/LKpqUNRq9Nrd7KeXyeZD.png',
                    warrantyPeriod: 2,
                    description:
                        'CB150R là sự pha trộn hoàn hảo giữa cổ điển và đương đại, nam tính và đầy bản lĩnh với màu sắc mới tinh tế từ khung, phuộc và tem xe, cùng thiết kế tân cổ điển kế thừa phong cách Neo Sport Café đình đám.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'Rebel500',
                    nameProductLine: 'Rebel 500 Phiên Bản 2022',
                    price: '180.800.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/January2022/Z5x1kqc1m80IhL9iYvgg.png',
                    warrantyPeriod: 2,
                    description:
                        'Tự do tạo dấu ấn của riêng mình Mẫu xe Rebel 500 với khối động cơ 2 xy lanh song song mạnh mẽ, đặt gọn trong bộ khung xe với trọng tâm thấp, phong cách thiết kế tối giản đã đưa chiếc xe trở nên hấp dẫn trong mắt người lái - là một cỗ máy thuần túy để người dùng thỏa sức sáng tạo thể hiện chất riêng của mình - đem đến một phong cách sống TỰ DO, điều mà mẫu Rebel 500 luôn mong muốn mang lại cho người lái.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'Gold2022',
                    nameProductLine: 'Gold Wing Phiên Bản 2022',
                    price: '1.231.000.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/April2022/Z1P4BwnXIVXVK8cypFqV.png',
                    warrantyPeriod: 2,
                    description:
                        'Bạn đã sẵn sàng để nâng tầm trải nghiệm cho những chuyến đi sắp tới của mình? Vậy thì đây chính là thời điểm. Thời điểm cho sự đổi mới vượt lên những quy chuẩn thông thường. Thời điểm cho Rebel 1100. Một chiếc xe phân khối lớn với kiểu dáng phong trần, mang đậm hình bóng của mẫu xe "bobber" hoài cổ, nhưng vẫn được kết hợp hài hòa cùng những chi tiết đương đại. Bên cạnh nét tinh tế về thiết kế, đây còn là một chiếc xe linh hoạt, thuận tiện và dễ dàng để di chuyển trên những cung đường đại lộ.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CubC125',
                    nameProductLine: 'Super Cub C125',
                    price: '85.801.091',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/October2021/AGlyT5hHi2yvLQUo2Y7L.png',
                    warrantyPeriod: 2,
                    description:
                        'Bạn đã sẵn sàng để nâng tầm trải nghiệm cho những chuyến đi sắp tới của mình? Vậy thì đây chính là thời điểm. Thời điểm cho sự đổi mới vượt lên những quy chuẩn thông thường. Thời điểm cho Rebel 1100. Một chiếc xe phân khối lớn với kiểu dáng phong trần, mang đậm hình bóng của mẫu xe "bobber" hoài cổ, nhưng vẫn được kết hợp hài hòa cùng những chi tiết đương đại. Bên cạnh nét tinh tế về thiết kế, đây còn là một chiếc xe linh hoạt, thuận tiện và dễ dàng để di chuyển trên những cung đường đại lộ.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'ATAS1021',
                    nameProductLine: 'Africa Twin Adventure Sport 2021',
                    price: '690.490.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/May2021/GESZaauRwIdeczAQ9qtC.jpg',
                    warrantyPeriod: 2,
                    description:
                        'Đích đến mỗi cuộc hành trình là một bầu trời trong xanh Với mỗi biker, niềm đam mê phiêu lưu, khám phá những miền đất mới luôn là sự khao khát và là động lực để họ tiến bước, để rồi cuối mỗi chặng hành trình, họ có thể ngồi tận hưởng vẻ đẹp của một bầu trời trong xanh trước mắt họ. Chúng tôi hiểu cảm giác này! Và đó là lý do chúng tôi trang bị chiếc Africa Twin Adventure Sport với những công nghệ và tính năng tối tân nhất, sẵn sàng cùng bạn khám phá thế giới.',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    codeProductLine: 'CBR1000RR-R',
                    nameProductLine: 'CBR1000RR-R Fireblade SP',
                    price: '1.050.000.000',
                    avatar: 'https://cdn.honda.com.vn/motorbikes/August2020/uWHYKZNqsXDhJOHFY7RI.png',
                    warrantyPeriod: 3,
                    description:
                        'ĐƯỜNG ĐUA LÀ SÂN CHƠI CỦA BẠN Nơi bạn sống thực với đam mê CBR1000RR-R Fireblade SP được trang bị hệ thống giảm xóc Smart Electronic Control (S-EC) thế hệ 2 và cụm phanh Brembo Stylema trên phanh trước. Với khả năng vận hành vượt trội, CBR1000RR-R Fireblade SP là món quà đắt giá nhất của Honda dành tặng cho các tín đồ tốc độ. HÃY TẬN HƯỞNG !!!',

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
        return await queryInterface.bulkDelete('ProductLines', null, {});
    },
};
