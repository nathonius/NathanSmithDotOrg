"use strict";
exports.__esModule = true;
var Hapi = require("hapi");
var Inert = require("inert");
var server = new Hapi.Server();
server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
});
server.register(Inert, function () { });
server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: './public',
            listing: false,
            index: false
        }
    }
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('./public/index.html');
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    if (server.info)
        console.log('Server running at:', server.info.uri);
});
