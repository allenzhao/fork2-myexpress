module.exports = function express() {
    var http = require('http');

    var app = function(request, response) {
        response.statusCode = 404;
        response.end();
    }

    app.listen = function(port, callback) {
        var server = http.createServer(this);
        server.listen(port, function() {
            callback();
        })
        return server;
    }
    return app;
}