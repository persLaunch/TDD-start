import express from "express";

import router from "./routes/api";

const app = express();

app.use(router);

export default app;
