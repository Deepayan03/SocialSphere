import Jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../models/User.js";

// Verify user using jwt token method
export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { userToken } = req.cookies;
  console.log("UserToken: ", userToken);

  if (!userToken) {
    return next(new ErrorHandler("Not loggedin", 401));
  }
  const decodedToken = Jwt.verify(userToken, process.env.SECRET_KEY);

  req.user = await User.findById(decodedToken._id);

  next();
});
