const { resolveSoa } = require('dns');
const cookieParser = require('cookie-parser')
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = process.env.PORT || 3000;

const db = require('./models');

const { router } = require('./routers');

app.use(express.json());
app.use(express.urlencoded());



app.use(cookieParser())

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

const publicPathDirectory = path.join(__dirname, './public');
app.use('/public', express.static(publicPathDirectory));


router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
