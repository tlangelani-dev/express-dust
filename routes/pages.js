var express = require('express');
var router = express.Router();

var data = {
    title: 'Spree | Home',
    languages: ['HTML', 'CSS', 'jQuery', 'NodeJs', 'PHP'],
    totals: {
        sub: 400,
        shipping: 50,
        save: null
    },
    menus: [
        'Men',
        'Women',
        'Kids',
        'Brands',
        'Inspiration'
    ]
};

router.get('/', function(req, res, next) {
    res.redirect('/home');
});

router.get('/home', function(req, res, next) {
    res.render('page/home', data);
});

router.get('/about', function(req, res, next) {
    res.render('page/about', data);
});

module.exports = router;