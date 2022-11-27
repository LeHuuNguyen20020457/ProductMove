const { Manager } = require('../models');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { client } = require('../helpers/connectRedis');

dotenv.config();

class authController {
    //[POST]/register
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
            Manager.findOne({
                where: {
                    [Op.and]: [{ username: username }, { password: password }],
                },
            }).then((manager) => {
                if (manager) {
                    const id = manager.id;

                    const accessToken = jwt.sign({ id: id }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: '9s',
                    });
                    const refreshToken = jwt.sign({ id: id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });

                    client.set(id.toString(), refreshToken, {
                        EX: 365 * 24 * 60 * 60 * 100,
                    });

                    res.status(200).send({
                        message: 'Đăng nhập thành công',
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    });
                } else {
                    res.status(404).send('Tài khoản sai');
                }
            });
        } catch (err) {
            res.status(500).send(err);
        }
    }

    //[POST]
    refreshToken(req, res, next) {
        const refreshToken = req.body.token;
        if (!refreshToken) res.status(401).send('Không tìm thấy token');

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
            if (err) res.status(401).send(err);

            // const toa = client.get(data.id.toString());

            client
                .get(String(data.id))
                .then((token) => {
                    if (token !== refreshToken) res.status(403).send('Không hợp lệ');
                    const accessToken = jwt.sign({ id: data.id }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: '9s',
                    });
                    res.status(201).send({ newAccessToken: accessToken });
                    next();
                })
                .catch((err) => {
                    res.status(401).send('token không hợp lệ');
                });
        });
    }

    //[POST]
    logout(req, res, next) {
        const refreshToken = req.body.token;

        if (!refreshToken) res.status(401).send('Không tìm thấy token');

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
            const id = data.id;
            client
                .del(id.toString())
                .then((tok) => res.status(200).send('Đã đăng xuất thành công'))
                .catch((err) => res.status(500).send(err));
        });
    }
}

module.exports = new authController();
