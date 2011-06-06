
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();
var nowjs = require('now');

var everyone = nowjs.initialize(app);
var models = require('./models');

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
  models.Program.find({})
    .limit(20)
    .execFind(function(err, events) {
      res.render('feed', {
        locals: {
                  events: events,
                  username: "Loretta"
                }
      });
    });
});

app.get('/event/:id', function(req, res) {
  models.Program.findOne({_id: req.params.id})
    .execFind(function(err, events) {
      console.log("find: " + err);
      console.log(events);
      res.render('event', {
        locals: {
                  events: [events[0]],
                  username: "Loretta"
                }
      });
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
