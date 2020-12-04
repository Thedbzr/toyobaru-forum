const express = require('express');
const router = express.Router();
const topicsCtrl = require('../controllers/topics');
const isLoggedIn = require('../config/auth');

//display topics
router.get('/', topicsCtrl.index);



module.exports = router;