import { Response } from "express";

export const sendToken = (
  res: Response,
  user: any,
  message: string,
  statusCode: number
) => {
  const userToken = user.getJWTToken();

  const options:any = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  res.status(statusCode).cookie("userToken", userToken, options).json({
    message,
    user,
  });
};
