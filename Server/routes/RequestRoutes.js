const express = require('express');
const {addRequest,updateRequest, getRequest,deleteRequest,getRequestWithCar} = require('../controllers/RequestController');
const router = express.Router();

router.post('/add',addRequest);
router.put('/update', updateRequest);
router.get('/', getRequest);
router.get('/getWithCar',getRequestWithCar);
router.delete('/delete',deleteRequest)
module.exports = router;