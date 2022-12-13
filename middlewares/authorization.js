const jwt = require('jsonwebtoken');

function authorization(req, res, next) {
    // if (!req.headers['authorization']) res.status(403).send('ERROR');

    // const authHeader = req.headers['authorization'];

    const authHeader = req.cookies.accessToken

    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    if (!token) res.status(401).send('ERROR');

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) res.status(401).send('Unauthorized');

        req.userId = data.id;
        next();
    });
}

module.exports = { authorization };
