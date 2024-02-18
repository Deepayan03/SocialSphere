import express from "express";
import { config } from "dotenv";
import UserRouter from "./routes/UserRoutes.js"
import errorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

config({
  path: "./config/config.env",
});
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

// Implementing Routes
app.use("/api/user", UserRouter)

export default app;


app.use(errorMiddleware);
