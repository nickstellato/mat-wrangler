var express = require('express');
var router = express.Router();

router.get('/mats', function(req, res) {
    var mats = '';
    var dataFile = req.app.get('appData');
	dataFile.mats.forEach(function(mat){
		mats += `<h2>${mat.name}</h2>`;
	});
	res.send(`
		<h1>Mat Wrangler</h1>
		${mats}
	`);
});

router.get('/mats/:id', function(req, res) {
    var dataFile = req.app.get('appData');
    var mat = dataFile.mats[req.params.id];
	res.send(`
		<h1>${mat.name}</h1>
	`);
});

module.exports = router;