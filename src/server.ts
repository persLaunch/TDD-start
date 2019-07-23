import http from "http";

import app from "./app";

import mongoose from "mongoose";

const port = process.env.SERVER_PORT || 3000;
const mongoDbUri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const mongoDbDatabase = process.env.MONGODB_DATABASE || "laranode";

mongoose.connect(
  `${mongoDbUri}/${mongoDbDatabase}`,
  { useNewUrlParser: true },
  (err: any) => {
    if (err) {
      console.log(`Error trying to connect to db: ${mongoDbDatabase}`);
      console.log(err);
    } else {
      console.log(`Connected to db: ${mongoDbDatabase}`);
    }
  }
);

const server = http.createServer(app);

server.on("listening", () => console.log(`Listening on port ${port}`));

server.listen(port);
