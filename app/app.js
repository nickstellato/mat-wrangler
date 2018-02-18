var express = require('express');
var app = express();
var dataFile = require('./data/mats.json');

app.get('/', function(req, res) {
	res.send('<h1>Mat Wrangler</h1>');
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});