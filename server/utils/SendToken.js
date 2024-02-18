export const sendToken = (res, user, message, statusCode) => {
  const userToken = user.getJWTToken();

  const options = {
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
