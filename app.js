var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var uglifyJs = require('uglify-js');
var fs = require('mz/fs');

// var routes = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');

var app = express();

// prepare server
//app.use('/data', express.static(__dirname + '/public/data'));

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// var appClientFiles = [
//   'app_client/app.js',
//   'app_client/maps/maps.controller.js',
//   'app_client/common/services/mapsData.service.js',
//   'app_client/common/directives/map/map.factory.js',
//   'app_client/common/directives/map/map.directive.js',
//   'app_client/common/directives/myFooter/myFooter.directive.js',
//   'app_client/common/directives/navigation/navigation.directive.js',
//   'app_client/common/directives/pageHeader/pageHeader.directive.js'
// ];
// var uglified = uglifyJs.minify(appClientFiles, { 
//   compress: false,
//   beautify: true
// });
// fs.writeFile('public/gen/jof.min.js', uglified.code, function(err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Script generated and saved: gen/jof.min.js');
//   }
// });

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use('/api', routesApi);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Oh Flibble. Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
