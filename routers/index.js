const routerManager = require('./manager.js');

function router(app) {
    app.use('/manager', routerManager);
}

module.exports = { router };
