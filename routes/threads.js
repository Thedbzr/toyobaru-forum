const express = require('express');
const router = express.Router();
const threadsCtrl = require('../controllers/threads');
const isLoggedIn = require('../config/auth');

router.get('/topics/:id/threads', threadsCtrl.index);


module.exports = router;
