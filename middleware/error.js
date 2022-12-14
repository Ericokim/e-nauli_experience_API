const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  // console.log(err);

  // Bad Request
  if (err?.statusCode === 400) {
    const message = err.message;
    error = new ErrorResponse(message, 400);
  } else if (err.message === "Request failed with status code 400") {
    const message = err.response.statusText;
    error = new ErrorResponse(message, 400);
  }

  // Unauthorized error
  if (err?.statusCode === 401) {
    const message = err.message;
    error = new ErrorResponse(message, 401);
  } else if (err.message === "Request failed with status code 401") {
    const message = err.response.statusText;
    error = new ErrorResponse(message, 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
  });
};

module.exports = errorHandler;
