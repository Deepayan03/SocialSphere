const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "BACKEND ERROR";

  if (!err.details) {
    // If there are no details provided, return only the error message
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    // If details are provided, return the full error object
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      details: err.details,
    });
  }
};

export default errorMiddleware;
