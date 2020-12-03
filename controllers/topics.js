module.exports = {
    index
}

function index(req, res) {
      res.render('topics/index', { title: 'All Topics'});
  }