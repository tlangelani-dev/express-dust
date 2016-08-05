var express = require('express');
var router = express.Router();

router.get('/api', function(req, res, next) {
    res.send('This is API - HOME');
});

router.get('/api/:id', function(req, res, next) {
    res.send('API with ID: ' + req.params.id);
});

module.exports = router;