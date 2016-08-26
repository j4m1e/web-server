var express = require('express');
var app = express();
// uppercase defines this as a constant i.e. should not be changed
var PORT = 3000; 

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log ('Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		// new Date().toString() - date & time
		console.log ('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

// Middleware must be at the top of the code or else it will not run
// This is application level middleware
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// ROUTES
// route level middleware below
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
});
// END OF ROUTES

// Expose a directory where content is served from
app.use(express.static(__dirname + '/public'));

// Set the port the web server will listen on & start it
app.listen(PORT, function () {
	console.log ('Express server started on ' + PORT + '!');
});