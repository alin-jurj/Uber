const express = require('express');
const {addCar,getCar} = require('../controllers/CarController');
const router = express.Router();

router.post('/add',addCar);
router.get('/', getCar);

module.exports = router;