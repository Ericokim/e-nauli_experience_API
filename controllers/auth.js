const api = require("../utils/api");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const { API_KEY, APP_SECRET } = require("../middleware/url");

// @descr     Generate token
// @route     POST /api/v1/auth/getToken
// @access    Public
exports.getToken = asyncHandler(async (req, res, next) => {
  try {
    // Data to be sent
    const formData = {
      apiKey: API_KEY,
      appSecret: APP_SECRET,
    };

    const { data } = await api.post(`/auth/token`, formData);
    // console.log(data.data[0].accessToken);
    let token = data.data[0]?.accessToken;
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const tokenformData = {
    apiKey: API_KEY,
    appSecret: APP_SECRET,
  };

  await api
    .post(`/auth/token`, tokenformData)
    .then((resp) => {
      // console.log(data.data[0].accessToken);
      let token = resp.data.data[0]?.accessToken;
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Data to be sent
      const formData = {
        idNumber: req.body.idNumber,
        msisdn: req.body.msisdn,
        yearOfBirth: req.body.yearOfBirth,
        pin: req.body.pin,
        carrierCode: req.body.carrierCode,
      };

      // console.log("Using Body-parser: ", formData);
      api
        .post(
          `/user/register`,
          formData, // req.body
          config
        )
        .then((respn) => {
          res.json(respn.data);
        })
        .catch((error) => {
          let err = error.response?.data.status;
          return next(new ErrorResponse(err.message, err.code));
        });
    })
    .catch((error) => {
      let err = error.response.data.status;
      return next(new ErrorResponse(err.message, err.code));
    });
});

// @desc      add Web Profile to an existing user
// @route     PUT /api/v1/auth/addWebProfile
// @access    Public
exports.addWebProfile = asyncHandler(async (req, res, next) => {
  const tokenformData = {
    apiKey: API_KEY,
    appSecret: APP_SECRET,
  };

  await api
    .post(`/auth/token`, tokenformData)
    .then((resp) => {
      // console.log(data.data[0].accessToken);
      let token = resp.data.data[0]?.accessToken;
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Data to be sent
      const formData = {
        msisdn: req.body.msisdn,
        saccoId: req.body.saccoId,
        email: req.body.email,
        password: req.body.password,
        designation: req.body.designation,
        saccoStationId: req.body.saccoStationId,
      };

      // console.log("Using Body-parser: ", formData);
      api
        .put(
          `/user/addWebProfile`,
          formData, // req.body
          config
        )
        .then((respn) => {
          res.json(respn.data);
        })
        .catch((error) => {
          let err = error.response?.data.status;
          return next(new ErrorResponse(err.message, err.code));
        });
    })
    .catch((error) => {
      let err = error.response.data.status;
      return next(new ErrorResponse(err.message, err.code));
    });
});

// @descr      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const tokenformData = {
    apiKey: API_KEY,
    appSecret: APP_SECRET,
  };
  let token;

  await api
    .post(`/auth/token`, tokenformData)
    .then((resp) => {
      // console.log(data.data[0].accessToken);
      token = resp.data.data[0]?.accessToken;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Data to be sent
      const formData = {
        // emailOrPhoneNumberOrId: req.body.emailOrPhoneNumberOrId,
        // pin: req.body.pin,

        emailOrPhoneNumber: req.body.emailOrPhoneNumber,
        password: req.body.password,
      };

      // console.log("Using Body-parser: ", formData);
      api
        .post(
          `/user/signIn`,
          formData, // req.body
          config
        )
        .then((respn) => {
          token = respn.data.data[0]?.accessToken;
          res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          });

          res.json(respn.data);
        })
        .catch((error) => {
          let err = error.response?.data.status;
          return next(new ErrorResponse(err.message, err.code));
        });
    })
    .catch((error) => {
      let err = error.response.data.status;
      return next(new ErrorResponse(err.message, err.code));
    });
});

// @desc      Log user out / clear cookie
// @route     GET /api/v1/auth/logout
// @access    Public
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Change password
// @route     PUT /api/v1/auth/changePassword
// @access    Private
exports.changePassword = asyncHandler(async (req, res, next) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    // Data to be sent
    const formData = {
      msisdnOrEmail: req.body.msisdnOrEmail,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword,
    };

    // console.log("Using Body-parser: ", formData);
    const { data } = await api.put(
      `/user/changePassword`,
      formData, // req.body
      config
    );
    res.json(data);
  } catch (error) {
    let err = error.response.data.status;
    return next(new ErrorResponse(err.message, err.code));
  }
});

// @desc      Reset password
// @route     PUT /api/v1/auth/resetPassword
// @access    Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  const tokenformData = {
    apiKey: API_KEY,
    appSecret: APP_SECRET,
  };

  await api
    .post(`/auth/token`, tokenformData)
    .then((resp) => {
      // console.log(data.data[0].accessToken);
      let token = resp.data.data[0]?.accessToken;
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Data to be sent
      const formData = {
        msisdn: req.body.msisdn,
        code: req.body.code,
        newPassword: req.body.newPassword,
      };

      // console.log("Using Body-parser: ", formData);
      api
        .put(
          `/user/resetPassword`,
          formData, // req.body
          config
        )
        .then((respn) => {
          res.json(respn.data);
        })
        .catch((error) => {
          let err = error.response?.data.status;
          return next(new ErrorResponse(err.message, err.code));
        });
    })
    .catch((error) => {
      let err = error.response.data.status;
      return next(new ErrorResponse(err.message, err.code));
    });
});

// @desc      Get Verification code
// @route     GET /api/v1/auth/verificationCode
// @access    Private
exports.getVerificationCode = asyncHandler(async (req, res, next) => {
  let token;

  const tokenformData = {
    apiKey: API_KEY,
    appSecret: APP_SECRET,
  };

  await api
    .post(`/auth/token`, tokenformData)
    .then((resp) => {
      // console.log(data.data[0].accessToken);
      token = resp.data.data[0]?.accessToken;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      api
        .get(`/user/verificationCode/${req.params.id}`, config)
        .then((respn) => {
          res.json(respn.data);
        })
        .catch((error) => {
          next(error);
        });
    })
    .catch((error) => {
      let err = error.response.data.status;
      return next(new ErrorResponse(err.message, err.code));
    });
});

// @desc      Verify code
// @route     POST /api/v1/auth/code/verify
// @access    Private
exports.verifyCode = asyncHandler(async (req, res, next) => {
  let token;

  const tokenformData = {
    apiKey: API_KEY,
    appSecret: APP_SECRET,
  };

  await api
    .post(`/auth/token`, tokenformData)
    .then((resp) => {
      // console.log(data.data[0].accessToken);
      token = resp.data.data[0]?.accessToken;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = {
        msisdn: req.body.msisdn,
        code: req.body.code,
      };

      api
        .post(`/user/code/verify`, formData, config)
        .then((respn) => {
          res.json(respn.data);
        })
        .catch((error) => {
          let err = error.response?.data.status;
          return next(new ErrorResponse(err.message, err.code));
        });
    })
    .catch((error) => {
      let err = error.response.data.status;
      return next(new ErrorResponse(err.message, err.code));
    });
});
