const { Manager } = require('../models');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

class managerController {
    //[POST] manager/register
    async register(req, res, next) {
        try {
            const { username, password, avatar, phone, email, role } = req.body;
            await Manager.create({
                username,
                password,
                avatar,
                phone,
                email,
                role,
            });
            res.status(201).send('seccess');
        } catch (err) {
            res.status(500).send(err);
        }
    }

    login(req, res, next) {
        try {
            const { username, password } = req.body;
            const manager = Manager.findOne({
                where: {
                    [Op.and]: [{ username: username }, { password: password }],
                },
            });
            if (manager) {
                const username = manager.username;
                const token = jwt.sign({ username: username }, process.env.PROCESS_ACCESS_TOKEN, {
                    expiresIn: '900000s',
                });
                res.status(200).send({
                    message: 'Đăng nhập thành công',
                    token: token,
                });
            } else {
                res.status(404).send('Tài khoản sai');
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = new managerController();
