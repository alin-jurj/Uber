const express = require('express');
const loginUser = require('../controllers/loginController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register',postPassanger)
module.exports = router;