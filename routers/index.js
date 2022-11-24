const routerManager = require('./manager.js');
const routerCustomer = require('./customer.js');
const routerBuy = require('./buy.js');
const routerProductLine = require('./productLine.js');
const routerProductParameter = require('./productParameter.js');
const routerManufacturing = require('./manufacturing.js');

function router(app) {
    app.use('/manager', routerManager);
    app.use('/customer/buy', routerCustomer);
    app.use('/productLine', routerProductLine);
    app.use('/productParameter', routerProductParameter);
    app.use('/manufacturing', routerManufacturing);
}
module.exports = { router };
