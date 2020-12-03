const express = require('express');
const router = express.Router();
const topicsCtrl = require('../controllers/topics');
const isLoggedIn = require('../config/auth');

router.get('/topics', topicsCtrl.index);


module.exports = router;
