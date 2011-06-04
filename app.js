
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();
var nowjs = require('now');

var everyone = nowjs.initialize(app);

var events = require('./models').events;
var user = require('./models').user;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res) {
  return res.redirect('/feed');
});

app.get('/feed', function(req, res) {
  res.render('feed', {
    locals: {
              events: events,
              username: user.username
            }
  });
});

app.get('/event/:id', function(req, res) {
  var event = events[0];
  res.render('event', {
    locals: {
              events: [event],
              username: user.username
            }
  });
});

app.get('/search', function(req, res) {
  res.render('search', {
  });
});

app.get('/config', function(req, res) {
  res.render('config', {
  });
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port);
}
