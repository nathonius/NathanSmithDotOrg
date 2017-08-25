import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
});

server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        return reply('hello' + request.params['name']);
    }
});

server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});