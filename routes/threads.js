const express = require('express');
const router = express.Router();
const threadsCtrl = require('../controllers/threads');
const isLoggedIn = require('../config/auth');

//Get all threads for specific topic
router.get('/topics/:id/threads', threadsCtrl.index);
// POST /topics/:id/threads (create a student using the submitted form data)
router.post('/topics/:id/threads', threadsCtrl.create);
//GET single thread
router.get('/threads/:id', threadsCtrl.show);


module.exports = router;
