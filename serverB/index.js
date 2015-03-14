var express = require('express');
var app = express();
var debug = require('debug')('serverB');


app.use(function(req, res, next) {
	debug('req url=' + req.url + ', method=' + req.method);
	next();
});

var enable_cors = true;
if (enable_cors) {
	// ============= cors ============
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.use(function(req, res, next) {
		if (req.method === 'OPTION') {
			res.send("Access-Control-Allow-Origin");
		} else {
			next();
		}
	});
	// ============= cors ============
}


app.get('/abc', function(req, res, next) {
	res.send("ok from 3001 ");
});


var port = process.env.PORT || 3001;
app.listen(port, function() {
	debug('server start at ', port);
});