const User = require('../models/user');

module.exports = {
    show,

};

function show(req,res){
    User.findById(req.params.id, function(err, user){
        console.lof(user);
        res.render('accounts/show', user);
    })
    
}
