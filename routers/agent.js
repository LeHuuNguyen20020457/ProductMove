const express = require('express');
const router = express.Router();

const agentController = require('../controllers/agentController');

const { authorization } = require('../middlewares/authorization');
const { checkManager } = require('../middlewares/checkManager');

router.get('/warranty/search', authorization, checkManager(['Agent']), agentController.getInterWarranty);
router.get('/sold', authorization, checkManager(['Agent']), agentController.getAllProductsSold);
router.get('/:id', agentController.getAgent);
router.get('/', agentController.getAllAgent);
router.post('/createAgent', authorization, checkManager(['Admin']), agentController.createAgent);
router.put('/updateAgent/:id', authorization, checkManager(['Admin', 'Agent']), agentController.updateAgent);
router.delete('/deleteAgent/:id', authorization, checkManager(['Admin']), agentController.deleteAgent);
module.exports = router;
