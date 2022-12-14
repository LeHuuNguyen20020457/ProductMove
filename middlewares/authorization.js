const jwt = require('jsonwebtoken');

function authorization(req, res, next) {
    // if (!req.headers['authorization']) res.status(403).send('ERROR');

    // const authHeader = req.headers['authorization'];

    const authHeader = req.cookies.accessToken

    if(!authHeader) res.redirect('/auth');
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    if (!token)  res.redirect('/auth');

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if(err) res.redirect('/auth')
        req.userId = data.id;
        next();
    });
}

module.exports = { authorization };
