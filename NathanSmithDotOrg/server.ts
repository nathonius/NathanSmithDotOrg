﻿import * as Hapi from 'hapi';
import * as Inert from 'inert';
const server = new Hapi.Server();
server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
});

server.register(Inert, () => {});

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
    path: '/js/{path*}',
    handler: {
        directory: {
            path: './public/js',
            listing: false,
            index: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/css/{path*}',
    handler: {
        directory: {
            path: './public/css',
            listing: false,
            index: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/img/{path*}',
    handler: {
        directory: {
            path: './public/img',
            listing: false,
            index: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/old',
    handler: function (request, reply) {
        reply.file('./public/Officerhalf.github.io/index.html');
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('./public/index.html');
    }
});

server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});