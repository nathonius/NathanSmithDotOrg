"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    path: '/ghp/{path*}',
    handler: {
        directory: {
            path: './public/Officerhalf.github.io',
            listing: false,
            index: false
        }
    }
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('./public/Officerhalf.github.io/index.html');
    }
});
server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        return reply('hello' + request.params['name']);
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
//# sourceMappingURL=server.js.map