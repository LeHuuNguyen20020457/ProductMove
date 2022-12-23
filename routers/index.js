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
const routerProductDelivery = require('./productDelivery');
const routerAuth = require('./auth');
const routerProduct = require('./product');
const routerSendWarranty = require('./sendWarranty');
const routerParts = require('./parts');


function router(app) {
    app.use('/manager', routerManager);
    app.use('/customer/buy', routerCustomer);
    app.use('/productLine', routerProductLine);
    
    app.use('/productParameter', routerProductParameter);
    app.use('/product', routerProduct);
    app.use('/manufacturing', routerManufacturing);

    app.use('/manufactureFactory', routerManufactureFactory);
    app.use('/agent', routerAgent);
    app.use('/warrantyCenter', routerWarrantyCenter);

    app.use('/warehouse', routerWarehouse);
    app.use('/inventory', routerInventory);

    app.use('/productDelivery', routerProductDelivery);

    app.use('/auth', routerAuth);
    
    app.use('/buy', routerBuy);

    app.use('/sendWarranty', routerSendWarranty);

    app.use('/parts', routerParts);

    app.use('/', routerProductLine);
}
module.exports = { router };
