module.exports = function express() {
    return function(request, response) {
        response.statusCode = 404;
        response.end();
    }
}