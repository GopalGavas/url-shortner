import express from "express";
import path from "path";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// Routes
import urlRoute from "./routes/url.routes.js";
import staticRoute from "./routes/static.routes.js";

app.use("/url", urlRoute);
app.use("/", staticRoute);

export { app };
