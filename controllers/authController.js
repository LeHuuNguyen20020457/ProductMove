const { Manager } = require('../models');
const { Op, json } = require('sequelize');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const md5 = require('md5');
const gravatar = require('gravatar');
const { client } = require('../helpers/connectRedis');

dotenv.config();

class authController {
    //Đăng ký tài khoản người dùng
    //[POST] /auth/register
    async register(req, res, next) {
        try {
            const { username, password, email, role } = req.body;
            const avatar = gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, true);
            await Manager.create({
                username,
                password: md5(password),
                avatar,
                email,
                role,
            });
            res.redirect('back')
        } catch (err) {
            res.status(500).send(err);
        }
    }

    //[GET] /auth
    loginApp(req, res, next) {
        res.render('auth/login')
    }

    //[POST] /auth/login
    login(req, res, next) {
        try {
            const { username, password } = req.body;
            Manager.findOne({
                where: {
                    [Op.and]: [{ username: username }, { password: md5(password) }],
                },
            }).then((manager) => {
                if (manager) {
                    const id = manager.id;
                    const accessToken = jwt.sign({ id: id }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: '900000000s',
                    });
                    const refreshToken = jwt.sign({ id: id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });

                    client.set(id.toString(), refreshToken, {
                        EX: 365 * 24 * 60 * 60 * 100,
                    });

                    // res.status(200).send({
                    //     message: 'Đăng nhập thành công',
                    //     accessToken: accessToken,
                    //     refreshToken: refreshToken,
                    // });


                    console.log(accessToken, refreshToken)
                    res.status(201)
                    .cookie('accessToken', 'Bearer ' + accessToken)
                    .cookie('refreshToken', refreshToken)
                    res.redirect('/')
                } else {
                    res.status(404).send('Tài khoản sai');
                }
            });
        } catch (err) {
            res.status(500).send(err);
        }
    }

    // tạo token mới khi jwt hết hạn
    //[POST] 
    refreshToken(req, res, next) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) res.status(401).send('Không tìm thấy token');

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
            if (err) res.status(401).send(err);

            // const toa = client.get(data.id.toString());

            client
                .get(String(data.id))
                .then((token) => {
                    if (token !== refreshToken) res.status(403).send('Không hợp lệ');
                    const accessToken = jwt.sign({ id: data.id }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: '900000000s',
                    });
                    res.status(201)
                        .cookie('accessToken', 'Bearer ' + accessToken)
                    next();
                })
                .catch((err) => {
                    res.status(401).send('token không hợp lệ');
                });
        });
    }

    //[GET] /auth/logout
    logout(req, res, next) {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) res.status(401).send('Không tìm thấy token');

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
            const id = data.id;
            client
                .del(id.toString())
                .then((tok) => {})
                .catch((err) => res.status(500).send(err));
        });

        res.clearCookie('accessToken')
        res.clearCookie('refreshToken')
        
        res.redirect('/auth')
    }
}

module.exports = new authController();
