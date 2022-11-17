const express = require('express');
const path = require('path');
const app = express();
const port = 3000 || process.env.PORT;

const db = require('./models');

const { router } = require('./routers');

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
