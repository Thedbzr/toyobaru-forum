const User = require('../models/user');

module.exports = {
  index
};

function index(req, res) {
  User.find({} , function(err, users){
    console.log(users);
    res.render('users/index', { title: 'Community', users});
  });
}