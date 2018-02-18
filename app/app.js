var express = require('express');
var app = express();
var dataFile = require('./data/mats.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
	res.send('<h1>Mat Wrangler</h1>');
});

var server = app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});