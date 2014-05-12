var express = require("../");
var request = require("supertest");

describe("app", function() {
	describe("create http server", function() {
		var server = express();
		request(server)
			.get('/foo')
			.expect(404)
			.end(function(err, res) {
				if (err) throw err;
			});
	});
});
