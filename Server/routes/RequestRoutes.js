const express = require('express');
const {addRequest,updateRequest, getRequest} = require('../controllers/RequestController');
const router = express.Router();

router.post('/add',addRequest);
router.put('/update', updateRequest);
router.get('/', getRequest);

module.exports = router;