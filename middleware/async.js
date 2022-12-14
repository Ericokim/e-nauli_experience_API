const apicache = require("apicache");

// Init cache
let cache = apicache.middleware;

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(cache("2 minutes"), fn(req, res, next)).catch(next);

module.exports = asyncHandler;
