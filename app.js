var path = require('path');
var express = require('express');
var consolidate = require('consolidate');
var dust = require('dustjs-helpers');
require(path.join(__dirname, 'libs/helpers'))();
var port = 3005;

var app = express();

// view setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');
app.engine('dust', consolidate.dust);
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./routes/pages'));
app.use('/', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, function() {
    console.log('Express server started on port: ' + port);
});
