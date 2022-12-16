const api = require("../utils/api");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");

// Protect with Server key
exports.protect = asyncHandler(async (req, res, next) => {
  let serverkey;
  try {
    serverkey = process.env.X_SERVER_KEY;

    if (serverkey) {
      serverkey = req.headers["x-server-key"];
    }

    // Make sure serverkey exists
    if (!serverkey) {
      return next(new ErrorResponse("Unauthorized access.", 401));
    }

    next();
  } catch (err) {
    return next(new ErrorResponse("Unauthorized access..", 401));
  }
});

// Token Authorization
exports.tokenAuth = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.cookies.token;

      token = req.headers.authorization.split(" ")[1];

      next();
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse("Not authorized, token failed", 401));
    }
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});
