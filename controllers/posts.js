const Thread = require('../models/thread');

module.exports = {
    create,
    update,
    delete: deletePost
};

function update(req,res){
    Thread.findOne({'posts._id': req.params.id}).then(function(thread){
        //find subdoc using id method on mongoose
        const post = thread.posts.id(req.params.id);
        //ensure post was created by the logged in user
        if (!post.user.equals(req.user._id)) return res.redirect(`/threads/${thread._id}`);
        //edit post
        Object.assign(post, req.body)
        //save the updated Thread
        thread.save().then(function () {
            //redirect back to the thread show view
            res.redirect(`/threads/${thread._id}`);
        }).catch(function (err) {
            //Display express error
            return next(err);
        });
    })
}

function create(req, res) {
    //find the thread to embed the post within
    Thread.findById(req.params.id, function (err, thread) {
        // add the user-centric info to the req.body
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        //push the subdoc for the post
        thread.posts.push(req.body);
        //save the top level document (not the subdocs)
        thread.save(function (err) {
            res.redirect(`/threads/${thread._id}`);
        });
    });
}


function deletePost(req, res, next) {
    Thread.findOne({ 'posts._id': req.params.id }).then(function (thread) {
        //find the post subdoc using id method on mongoose arrays
        const post = thread.posts.id(req.params.id);
        //ensure post was created by the logged in user
        if (!post.user.equals(req.user._id)) return res.redirect(`/threads/${thread._id}`);
        //remove the post using the remove method of subdoc
        post.remove();
        //save the updated Thread
        thread.save().then(function () {
            //redirect back to the thread show view
            res.redirect(`/threads/${thread._id}`);
        }).catch(function (err) {
            //Display express error
            return next(err);
        });
    });
}