var http = require('http');

var myServer = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write('Roux Meetups');
	response.end();
});

myServer.listen(3000);
