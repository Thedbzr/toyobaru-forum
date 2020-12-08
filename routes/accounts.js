const express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts');
const isLoggedIn = require('../config/auth');

router.get('/accounts',isLoggedIn, accountsCtrl.show);
router.put('/accounts', isLoggedIn, accountsCtrl.update);

module.exports = router;