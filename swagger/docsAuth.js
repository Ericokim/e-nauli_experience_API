//?  Auth Docs
exports.register = {
  post: {
    tags: ["Auth"], // operation's tag.
    summary: "Register a user",
    description: "Create an account for the specified user",
    operationId: "registerUser", // unique operation id
    parameters: [
      {
        name: "x-server-key", // name of the param
        in: "header", // location of the param
        required: true, // Mandatory param
        description: "an authorization header",
      },
    ],
    // security
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/registerBody",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Request processed successfullyy",
      },
      500: {
        description: "Internal Server Error",
      },
      403: {
        description: "Forbidden",
      },
      401: {
        description: "Unauthorized",
      },
    },
  },
};

exports.login = {
  post: {
    tags: ["Auth"], // operation's tag.
    summary: "login user",
    description:
      "Signln provides functionality to sign in a user to the web app",
    operationId: "loginUser", // unique operation id
    parameters: [
      {
        name: "x-server-key", // name of the param
        in: "header", // location of the param
        required: true, // Mandatory param
        description: "An authorization header",
        schema: {
          type: "string",
        },
      },
    ],
    // security
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/loginBody",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Request processed successfullyy",
      },
      500: {
        description: "Internal Server Error",
      },
      403: {
        description: "Forbidden",
      },
      401: {
        description: "Unauthorized",
      },
    },
  },
};

exports.logout = {
  get: {
    tags: ["Auth"], // operation's tag.
    summary: "logout User",
    description: "Logout User and Clear token cookie",
    produces: ["application/json"],
    parameters: [],
    // security
    security: [
      {
        bearerAuth: [],
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Request processed successfully",
      },
      403: {
        description: "Forbidden", // response desc.
      },
      401: {
        description: "Unauthorized", // response desc.
      },
    },
  },
};

exports.changePassword = {
  put: {
    tags: ["Auth"], // operation's tag.
    summary: "Change user password",
    description: "Change user password", // short desc
    operationId: "changePassword", // unique operation id
    parameters: [],
    // security
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/changePasswordBody",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Request processed successfully",
      },
      500: {
        description: "Internal Server Error",
      },
      404: {
        description: "Not found",
      },
      403: {
        description: "Forbidden",
      },
      401: {
        description: "Unauthorized",
      },
    },
  },
};

exports.resetPassword = {
  put: {
    tags: ["Auth"], // operation's tag.
    summary: "reset user password",
    description: "reset user password", // short desc
    operationId: "resetPassword", // unique operation id
    parameters: [
      {
        name: "x-server-key", // name of the param
        in: "header", // location of the param
        required: true, // Mandatory param
        description: "an authorization header",
      },
    ],
    // security
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/resetPasswordBody",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Request processed successfully",
      },
      500: {
        description: "Internal Server Error",
      },
      404: {
        description: "Not found",
      },
      403: {
        description: "Forbidden",
      },
      401: {
        description: "Unauthorized",
      },
    },
  },
};

exports.addWebProfile = {
  put: {
    tags: ["Auth"], // operation's tag.
    summary: "add user WebProfile",
    description: "add user WebProfile", // short desc
    operationId: "addWebProfile", // unique operation id
    parameters: [
      {
        name: "x-server-key", // name of the param
        in: "header", // location of the param
        required: true, // Mandatory param
        description: "an authorization header",
      },
    ],
    // security
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/addWebProfileBody",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Request processed successfully",
      },
      500: {
        description: "Internal Server Error",
      },
      404: {
        description: "Not found",
      },
      403: {
        description: "Forbidden",
      },
      401: {
        description: "Unauthorized",
      },
    },
  },
};

// Auth Schema
exports.AuthSchema = {
  registerBody: {
    type: "object",
    properties: {
      idNumber: {
        type: "string",
        required: true,
        description: "User id number",
      },
      msisdn: {
        type: "string",
        required: true,
        description:
          "Phone number of the user in INTERNATIONAl format. E.g. 2547XXXXXX or 2541XXXXXX",
      },
      yearOfBirth: {
        type: "string",
        required: true,
        description: "Year of Birth",
      },
      pin: {
        type: "string",
        required: true,
        description: "4 Digit Pin to secure user account",
      },
      carrierCode: {
        type: "string",
        required: true,
        description: "5 digit carrier code identifying phone number network",
      },
    },
    example: {
      idNumber: "string",
      msisdn: "string",
      yearOfBirth: "string",
      pin: "string",
      carrierCode: "string",
    },
  },

  loginBody: {
    type: "object",
    properties: {
      emailOrPhoneNumber: {
        type: "string",
        required: true,
        description:
          "valid email or phone number(07XXX or 01XXX or 254XX) to be used for login",
      },
      password: {
        type: "string",
        required: true,
        description: "User password",
      },
    },
    example: {
      emailOrPhoneNumber: "string",
      password: "string",
    },
  },

  changePasswordBody: {
    type: "object",
    properties: {
      msisdnOrEmail: {
        type: "string",
        required: true,
        description: "Users msisdn or email",
      },
      oldPassword: {
        type: "string",
        required: true,
        description: "Old password",
      },
      newPassword: {
        type: "string",
        required: true,
        description: "New password",
      },
    },
    example: {
      msisdnOrEmail: "string",
      oldPassword: "string",
      newPassword: "string",
    },
  },

  resetPasswordBody: {
    type: "object",
    properties: {
      msisdn: {
        type: "string",
        required: true,
        description: "Phone number of the user to reset password",
      },
      code: {
        type: "string",
        required: true,
        description: "Verification code",
      },
      newPassword: {
        type: "string",
        required: true,
        description: "New password",
      },
    },
    example: {
      msisdn: "string",
      code: "string",
      newPassword: "string",
    },
  },

  addWebProfileBody: {
    type: "object",
    properties: {
      msisdn: {
        type: "string",
        required: true,
        description:
          "Phone number of the user in INTERNATIONAl format. E.g. 2547XXXXXX or 2541XXXXXX",
      },

      saccoId: {
        type: "string",
        required: true,
        description: "Identifier of sacco to which a user is an official",
      },
      email: {
        type: "string",
        required: true,
        description: "Email address",
      },
      password: {
        type: "string",
        required: true,
        description: "4 Digit Pin to secure user account",
      },
      designation: {
        type: "enum",
        Enumerator: [
          "Official",
          "Agent",
          "Clerk",
          "Fuel",
          "StationManager",
          "ParcelAgent",
        ],
      },
      saccoStationId: {
        type: "string",
        required: false,
        description:
          "Optional. Sacco Station assigned to the profile/user getting created",
      },
    },
    example: {
      msisdn: "string",
      saccoId: "string",
      email: "string",
      password: "string",
      designation: "Official",
      saccoStationId: "string",
    },
  },
};
