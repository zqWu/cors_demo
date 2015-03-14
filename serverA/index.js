var express = require('express');
var app = express();
var debug = require('debug')('serverA');
var fs = require('fs');
var path = require('path');


app.use(function(req, res, next) {
	debug('req url=' + req.url);
	next();
});
app.use(express.static(__dirname));

app.use('/', function(req, res, next) {
	var file = path.join(__dirname, 'index.html');
	var stream = fs.createReadStream(file);
	res.pipe(stream);
	res.end();
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	debug('server start at ', port);
});