const express = require('express');
const router = express.Router();
const threadsCtrl = require('../controllers/threads');
const isLoggedIn = require('../config/auth');

//Get all threads for specific topic
router.get('/topics/:id/threads', threadsCtrl.index);
// GET /topics/id/threads/new (show a form to enter a new thread data)
router.get('/topics/threads/new', threadsCtrl.new);
// POST /topics/:id/threads (create a student using the submitted form data)
router.post('/topics/:id/threads', threadsCtrl.create);


module.exports = router;
