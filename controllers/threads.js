const User = require('../models/user');
const Thread = require('../models/thread');

module.exports = {
    index
}

//display all threads using req.params.topic
function index(req,res){
    req.body.Topic = req.topic._id;

    console.log(req.body);
    res.render('threads/index' )
}