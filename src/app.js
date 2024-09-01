import express from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
import urlRoute from "./routes/url.routes.js";

app.use("/url", urlRoute);

export { app };
