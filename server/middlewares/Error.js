const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "BACKEND ERROR";

  if (!err.details) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      details: err.details,
    });
  }
};

export default errorMiddleware;
