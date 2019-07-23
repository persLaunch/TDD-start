
import http from "http";

import app from "./app";

const port = process.env.SERVER_PORT || 3000;

const server = http.createServer(app);

server.on("listening", () => console.log(`Listening on port ${port}`));

server.listen(port);
