const Thread = require('../models/thread');

module.exports = {
    index,
}

function index(req, res) {
      res.render('topics/index', { title: 'All Topics'});
  }