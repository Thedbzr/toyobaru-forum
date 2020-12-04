const Thread = require('../models/thread');

module.exports = {
    index,
    new: newThread,
    create,
    show
}

function index(req,res){
    Thread.find({topic: req.params.id}, function(err, threads){
        console.log('_________________');
        console.log(threads);
        res.render('threads/index', {threads, topic: req.params.id} )
    })
    
}
function newThread(req,res){
    res.render('threads/new');
}

function create(req,res){
    req.body.topic = req.params.id;
    req.body.user = req.user._id;
   // console.log(req.body);
   // console.log(req.params.id);
    const thread = new Thread(req.body);
    thread.save(function (err){ 
        if(err) return console.log(err.message);
       // console.log(thread);
        res.redirect(`/topics/${req.params.id}/threads`);
    })
};

function show(req,res){
    Thread.findById(req.params.id, function(err,thread){
        res.render('threads/show', {thread});
    })
}
