const url = require("url");
const api = require("../utils/api");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const successHandler = require("../middleware/success");

// @descr     Get all users
// @route     GET /api/v1/user/getUsers
// @access    Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const { data } = await api.get(`/user/list?${params}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});
