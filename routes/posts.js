const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

//Post to create post
router.post('/threads/:id/posts', postsCtrl.create);
//Update Post
router.put('/posts/:id', postsCtrl.update);
//DELETE Post
router.delete('/posts/:id', postsCtrl.delete);

module.exports = router;
