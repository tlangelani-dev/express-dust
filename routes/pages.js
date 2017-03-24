'use strict';

var express = require('express');
var i18n = require('i18n');
var router = express.Router();

// configure i18n
i18n.configure({
    locales: ['en'],
    directory: __dirname + '/../locales'
});
i18n.setLocale('en');

var data = {
    title: i18n.__('Spree'),
    sale: i18n.__('SALE'),
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