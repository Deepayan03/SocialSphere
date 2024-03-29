import express from "express";
import { config } from "dotenv";
import UserRouter from "./routes/UserRoutes.js";
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

export default app;

app.use(errorMiddleware);
