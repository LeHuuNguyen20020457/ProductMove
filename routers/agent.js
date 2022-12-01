const express = require('express');
const router = express.Router();

const agentController = require('../controllers/agentController');

router.get('/:id', agentController.getAgent);
router.get('/', agentController.getAllAgent);
router.post('/createAgent', agentController.createAgent);
router.put('/updateAgent/:id', agentController.updateAgent);
router.delete('/deleteAgent/:id', agentController.deleteAgent);

module.exports = router;
