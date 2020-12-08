const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

//Post to create post
router.post('/threads/:id/posts',isLoggedIn, postsCtrl.create);
//Update Post
router.put('/posts/:id', isLoggedIn, postsCtrl.update);
//DELETE Post
router.delete('/posts/:id', isLoggedIn, postsCtrl.delete);

module.exports = router;
