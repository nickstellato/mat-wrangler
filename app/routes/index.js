var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send(`
		<h1>Welcome</h1>
		<p>Mat Wrangler is a web application for manging your bullpen at your wrestling tournament.</p>
	`);
});

module.exports = router;