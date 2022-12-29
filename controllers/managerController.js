const { Manager } = require('../models');

class managerController {

    async uploadAvatar(req, res, next) {
        try {
            const userId = req.userId;
            const file = req.file;
            const image = `http://localhost:3000/${file.path}`;

            Manager.update(
                { avatar: image },
                {
                    where: {
                        id: userId,
                    },
                },
            ).then(() => {
                res.status(200).send('thay ảnh đại diện thành công');
            });
        } catch (err) {
            res.status(500).send(err);
        }
    }
    

    //[GET] /manager/createTK
    getInterRegister(req, res, next){
        res.render('admin/register.hbs', {isShow: true})
    }

}

module.exports = new managerController();
