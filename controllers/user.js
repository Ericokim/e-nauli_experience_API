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

// @descr     Update User
// @route     PUT /api/v1/user/updateUser
// @access    Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/user/edit`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update User Status
// @route     PUT /api/v1/user/updateUserStatus
// @access    Private
exports.updateUserStatus = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/user/status`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});
