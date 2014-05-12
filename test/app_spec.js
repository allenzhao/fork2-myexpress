var express = require("../");
var request = require("supertest");

describe("app", function() {
    describe("create http server", function() {
        it('create http server', function() {
            var server = express();
            request(server)
                .get('/foo')
                .expect(404)
                .end(function(err, res) {
                    if (err) throw err;
                });
        });
    });
    describe('#listen', function() {
        it('responds to /foo with 404', function() {
            var server = express();
            server.listen(7000);
            request('http://localhost:7000')
                .get('/foo')
                .expect(404)
                .end(function(err, res) {
                    if (err) throw err;
                });
        });
    });
});