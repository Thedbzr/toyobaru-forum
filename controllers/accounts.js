const User = require('../models/user');

module.exports = {
    show,
    update
};

function show(req, res) {
    res.render('accounts/show', { title: 'Account', user: req.user });
}

function update(req, res) {
    req.body = Object.entries(req.body).reduce((acc, pairs) => {
        if (pairs[1]) acc[pairs[0]] = pairs[1];
        return acc;
    }, {})
    Object.assign(req.user, req.body);
    req.user.save(function (err) {
        res.redirect(`/users`);
    })
}