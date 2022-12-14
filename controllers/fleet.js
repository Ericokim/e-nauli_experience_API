const url = require("url");
const api = require("../utils/api");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const successHandler = require("../middleware/success");

// @descr     Get all vehicles based on applied filters.
// @route     GET /api/v1/fleet/getVehicles?saccoId=1&routeId=1&offset=0&pageSize=10
// @access    Private
exports.getVehicles = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const { data } = await api.get(`/vehicle?${params}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Add vehicle
// @route     POST /api/v1/fleet/addVehicle
// @access    Private
exports.addVehicle = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    // Data to be sent
    const formData = {
      plateNumber: req.body.plateNumber,
      saccoId: req.body.saccoId,
      seatingCapacity: req.body.seatingCapacity,
      fleetNumber: req.body.fleetNumber,
    };

    // console.log("Using Body-parser: ", formData);
    const { data } = await api.post(
      `/vehicle`,
      formData, // req.body
      config
    );
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update vehicle
// @route     PUT /api/v1/fleet/updateVehicle
// @access    Private
exports.updateVehicle = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    // Data to be sent
    const formData = {
      vehicleId: req.body.vehicleId,
      plateNumber: req.body.plateNumber,
      saccoId: req.body.saccoId,
      routeId: req.body.routeId,
      seatingCapacity: req.body.seatingCapacity,
      fleetNumber: req.body.fleetNumber,
    };

    const { data } = await api.put(
      `/vehicle`,
      formData, // req.body
      config
    );
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Get all Operators based on applied filters.
// @route     GET /api/v1/fleet/getOperators?vehicleId=1&offset=0&pageSize=10
// @access    Private
exports.getOperators = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const { data } = await api.get(`/vehicle/operators?${params}`, config);
    // res.json(data);

    return successHandler(res, data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Add operator
// @route     POST /api/v1/fleet/addOperator
// @access    Private
exports.addOperator = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    // Data to be sent
    const formData = {
      msisdn: req.body.msisdn,
      vehicleId: req.body.vehicleId,
      role: [req.body.role], // array enum [ Conductor, Driver, Owner ]
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      accountNumber: req.body.accountNumber,
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      bankCode: req.body.bankCode,
    };

    // console.log("Using Body-parser: ", formData);

    const { data } = await api.post(
      `/vehicle/addOperator`,
      formData, // req.body
      config
    );
    res.status(200).json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @descr     Update operator
// @route     PUT /api/v1/fleet/updateOperator
// @access    Private
exports.updateOperator = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };

    // Data to be sent
    const formData = {
      msisdn: req.body.msisdn,
      vehicleId: req.body.vehicleId,
      role: [req.body.role], // array enum
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      accountNumber: req.body.accountNumber,
      bankName: req.body.bankName,
      bankBranch: req.body.bankBranch,
      bankCode: req.body.bankCode,
    };

    const { data } = await api.put(
      `/vehicle/operator`,
      formData, // req.body
      config
    );
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});
