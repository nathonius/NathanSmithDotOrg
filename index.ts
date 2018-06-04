import * as Hapi from "hapi";
import * as Inert from "inert";

const server: Hapi.Server = new Hapi.Server({
    port: process.env.PORT || 8080,
    host: process.env.HOST || "localhost"
});

async function provision() {
    await server.register(Inert);

    server.route({
        method: "GET",
        path: "/{path*}",
        handler: {
            directory: {
                path: "./public",
                listing: false,
                index: false
            }
        }
    });

    server.route({
        path: "/",
        method: "GET",
        handler: {
            file: "./public/index.html"
        }
    });

    await server.start();

    console.log("Server running at:", server.info.uri);
}

provision();