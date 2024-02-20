export const catchAsyncError = (passedFunction) => (req, res, next) => {
  Promise.resolve(passedFunction(req, res, next)).catch(error => {
    const errorMessage = "Internal Server Error";
    console.error(`${errorMessage}: ${error.message}`);
    res.status(500).json({ error: `${errorMessage}: ${error.message}` });
  });
};
