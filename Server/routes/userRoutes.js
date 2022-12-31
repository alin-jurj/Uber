const express = require('express');
const {loginUser, getPassangers,signup} = require('../controllers/userController');
const router = express.Router();

//router.get('/',getPassangers)
router.post('/signin',loginUser);
router.post('/signup', signup);

//router.post('/register',postPassanger)
module.exports = router;