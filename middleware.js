// use module exports to expose middleware

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

module.exports = middleware;
