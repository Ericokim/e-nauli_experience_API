const url = require("url");
const api = require("../utils/api");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const successHandler = require("../middleware/success");

// @descr     Get all Sacco based on applied filters.
// @route     GET /api/v1/sacco/getSaccos?offset=0&pageSize=10
// @access    Private
exports.getSaccos = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const { data } = await api.get(`/sacco?${params}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Get single Sacco
// @route     GET /api/v1/sacco/getSacco/:id
// @access    Private
exports.getSacco = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.get(`/sacco/${req.params.id}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Add Sacco
// @route     POST /api/v1/sacco/addSacco
// @access    Private
exports.addSacco = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.post(`/sacco`, req.body, config);
    res.status(200).json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Sacco
// @route     PUT /api/v1/sacco/updateSacco
// @access    Private
exports.updateSacco = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/sacco`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Sacco Status
// @route     PUT /api/v1/sacco/updateSaccoStatus
// @access    Private
exports.updateSaccoStatus = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/sacco/status`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Get all Sacco Charge based on applied filters.
// @route     GET /api/v1/sacco/getSaccosCharge?offset=0&pageSize=10
// @access    Private
exports.getSaccoCharges = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const { data } = await api.get(`/sacco/charge/list?${params}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Get single Sacco Charge
// @route     GET /api/v1/sacco/getSaccoCharge/:id
// @access    Private
exports.getSaccoCharge = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.get(`/sacco/charge/${req.params.id}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Add Sacco Charge
// @route     POST /api/v1/sacco/addSaccoCharge
// @access    Private
exports.addSaccoCharge = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.post(`/sacco/charge`, req.body, config);
    res.status(200).json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Sacco Charge
// @route     PUT /api/v1/sacco/updateSaccoCharge
// @access    Private
exports.updateSaccoCharge = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/sacco/charge`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Sacco Charge Status
// @route     PUT /api/v1/sacco/updateSaccoChargeStatus
// @access    Private
exports.updateSaccoChargeStatus = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/sacco/charge/status`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Get Sacco Balance
// @route     POST /api/v1/sacco/SaccoBalance
// @access    Private
exports.SaccoBalance = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.post(`/sacco/balance`, req.body, config);
    res.status(200).json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Get all Saccos Officials based on applied filters.
// @route     GET /api/v1/sacco/getSaccosOfficialss?offset=0&pageSize=10
// @access    Private
exports.getSaccosOfficials = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const { data } = await api.get(`/sacco/official/list?${params}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Get single Sacco Official
// @route     GET /api/v1/sacco/getSaccosOfficial/:id
// @access    Private
exports.getSaccosOfficial = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.get(`/sacco/official/${req.params.id}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Add Saccos Official
// @route     POST /api/v1/sacco/addSaccosOfficial
// @access    Private
exports.addSaccosOfficial = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.post(`/sacco/addOfficial`, req.body, config);
    res.status(200).json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Saccos Official
// @route     PUT /api/v1/sacco/updateSaccosOfficial
// @access    Private
exports.updateSaccosOfficial = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/sacco/official`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Saccos Official Status
// @route     PUT /api/v1/sacco/updateSaccosOfficialStatus
// @access    Private
exports.updateSaccosOfficialStatus = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/sacco/official/status`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Get all SaccoStation based on applied filters.
// @route     GET /api/v1/sacco/getSaccoStations?offset=0&pageSize=10
// @access    Private
exports.getSaccoStations = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const { data } = await api.get(`/saccoStation/list?${params}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Get single Sacco Station
// @route     GET /api/v1/sacco/getSaccoStation/:id
// @access    Private
exports.getSaccoStation = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.get(`/saccoStation/${req.params.id}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    next(error);
  }
});

// @descr     Add Sacco Station
// @route     POST /api/v1/sacco/addSaccoStation
// @access    Private
exports.addSaccoStation = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.post(`/saccoStation/create`, req.body, config);
    res.status(200).json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Sacco Station
// @route     PUT /api/v1/sacco/updateSaccoStation
// @access    Private
exports.updateSaccoStation = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(`/saccoStation/edit`, req.body, config);
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update Sacco Station Status
// @route     PUT /api/v1/sacco/updateSaccoStationStatus
// @access    Private
exports.updateSaccoStationStatus = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    const { data } = await api.put(
      `/saccoStation/toggleStatus`,
      req.body,
      config
    );
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});
