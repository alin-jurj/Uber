const express = require('express');
const {loginUser, getPassangers,signupPassenger, signupDriver} = require('../controllers/userController');
const router = express.Router();

router.get('/',getPassangers)
router.post('/signin',loginUser);
router.post('/signupPassenger', signupPassenger);
router.post('/signupDriver', signupDriver);

//router.post('/register',postPassanger)
module.exports = router;