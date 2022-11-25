const routerManager = require('./manager.js');
const routerCustomer = require('./customer.js');
const routerBuy = require('./buy.js');
const routerProductLine = require('./productLine.js');
const routerProductParameter = require('./productParameter.js');
const routerManufacturing = require('./manufacturing.js');
const routerManufactureFactory = require('./manufactureFactory.js');
const routerAgent = require('./agent.js');
const routerWarrantyCenter = require('./warrantyCenter.js');
const routerWarehouse = require('./warehouse');
const routerInventory = require('./inventory');

function router(app) {
    app.use('/manager', routerManager);
    app.use('/customer/buy', routerCustomer);
    app.use('/productLine', routerProductLine);
    app.use('/productParameter', routerProductParameter);
    app.use('/manufacturing', routerManufacturing);

    app.use('/manufactureFactory', routerManufactureFactory);
    app.use('/agent', routerAgent);
    app.use('/warrantyCenter', routerWarrantyCenter);

    app.use('/warehouse', routerWarehouse);
    app.use('/inventory', routerInventory);
}
module.exports = { router };
