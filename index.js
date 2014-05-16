module.exports = function express() {
    var http = require('http');

    var app = function(request, response, next) {
        app.handle(request, response, next);
        response.statusCode = 404;
        response.end();

    }

    app.handle = function(request, response, next) {
        var stack = app.stack;

        function next() {
            var middleWare = stack.shift();
            if (middleWare == undefined) {
                return;
            }
            middleWare(request, response, next);
        }
        next();

    }

    app.listen = function(port, callback) {
        var server = http.createServer(this);
        server.listen(port, function() {
            callback();
        })
        return server;
    }

    app.stack = [];

    app.use = function(func) {
        app.stack.push(func);
    }


    return app;
}