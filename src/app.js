import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import {
  restrictToLoggedInUser,
  checkAuth,
} from "./middleware/auth.middleware.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// Routes
import urlRouter from "./routes/url.routes.js";
import staticRouter from "./routes/static.routes.js";
import userRouter from "./routes/user.routes.js";

app.use("/url", restrictToLoggedInUser, urlRouter);
app.use("/user", userRouter);
app.use("/", checkAuth, staticRouter);

export { app };
