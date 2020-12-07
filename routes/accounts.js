const express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts');
const isLoggedIn = require('../config/auth');

router.get('/accounts', accountsCtrl.show);
router.put('/accounts', accountsCtrl.update);

module.exports = router;