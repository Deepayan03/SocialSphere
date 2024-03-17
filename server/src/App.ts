import express from "express";
import { config } from "dotenv";
import UserRouter from "./routes/UserRoutes.js";
import PostRouter from "./routes/PostRoutes.js";
import LikeRouter from "./routes/LikeRoutes.js";
import errorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// config({
//   path: "./config/config.env",
// });

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
morgan("dev");

app.use(cookieParser());

// Implementing Routes
app.use("/api/user", UserRouter);

// post route
app.use("/api/post", PostRouter);

// like route
app.use("/api/like", LikeRouter);

export default app;

app.use(errorMiddleware);
