var express = require('express');
var router = express.Router();

var data = {
    title: 'Spree | Home',
    languages: ['HTML', 'CSS', 'jQuery', 'NodeJs', 'PHP']
};

router.get('/', function(req, res, next) {
    res.redirect('/home');
});

router.get('/home', function(req, res, next) {
    res.render('page/home', data);
});

module.exports = router;