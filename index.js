module.exports = function express() {
    var httpServer = require('http');
    var events = function(request, response) {
        response.statusCode = 404;
        response.end();
    }
    var app = httpServer.createServer(events);

    return app;
}