var express = require('express');
var app = express();
var dataFile = require('./data/mats.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
	res.send(`
		<h1>Welcome</h1>
		<p>Mat Wrangler is a web application for manging your bullpen at your wrestling tournament.</p>
	`);
});

app.get('/mats', function(req, res) {
	var mats = '';
	dataFile.mats.forEach(function(mat){
		mats += `<h2>${mat.name}</h2>`;
	});
	res.send(`
		<h1>Mat Wrangler</h1>
		${mats}
	`);
});

app.get('/mats/:id', function(req, res) {
	var mat = dataFile.mats[req.params.id];
	res.send(`
		<h1>${mat.name}</h1>
	`);
});

var server = app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});