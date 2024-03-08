import Jwt, { JwtPayload } from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { NextFunction, Response } from "express";
import { GetUser, User } from "../Interfaces/interfaces.js";

// Define an interface that extends JwtPayload and includes the _id property
interface CustomJwtPayload extends JwtPayload {
  _id: string;
}

// Verify user using jwt token method
export const isAuthenticated = catchAsyncError(
  async (req: GetUser, res: Response, next: NextFunction) => {
    const { userToken } = req.cookies;
    // console.log("UserToken: ", userToken);
    // console.log(req.cookies)
    if (!userToken) {
      return next(new ErrorHandler("Not logged in", 401));
    }

    try {
      const decodedToken: CustomJwtPayload = Jwt.verify(userToken, process.env.SECRET_KEY) as CustomJwtPayload;

      // Assuming decodedToken contains necessary user information
      req.user = decodedToken;

      next();
    } catch (error) {
      // Token verification failed
      return next(new ErrorHandler("Invalid token", 401));
    }
  }
);
