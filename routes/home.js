var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
    res.render('page/home', {title: 'Spree | Home'});
});

module.exports = router;