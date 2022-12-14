//**  @document  GET /api/v1/fleet */

//? Vehicle Docs
exports.getVehicles = {
  get: {
    tags: ["Fleet"], // operation's tag.
    summary: "Fetch all Vehicles",
    description: "Return list of all Vehicles",
    produces: ["application/json"],
    parameters: [
      {
        name: "offset", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "integer",
          description:
            "The number of items to skip before starting to collect the result set",
        },
      },
      {
        name: "pageSize", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "integer",
          description: "The numbers of items to return",
        },
      },
      {
        name: "saccoId", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
        },
      },
      {
        name: "routeId", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
        },
      },
    ],
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
        content: {
          // content-type
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/Vehicle", // data model
            },
          },
        },
      },
      // response code
      403: {
        description: "Forbidden", // response desc.
      },
      401: {
        description: "Unauthorized", // response desc.
        // content: {
        //   // content-type
        //   "application/json": {
        //     schema: {
        //       $ref: "#/components/responses/UnauthorizedError", // error data model
        //     },
        //   },
        // },
      },
    },
  },
};

exports.addVehicle = {
  post: {
    tags: ["Fleet"], // operation's tag.
    summary: "Add Vehicles",
    description: "Create Vehicle",
    operationId: "createVehicle", // unique operation id
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
            $ref: "#/components/schemas/VehicleBody",
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

exports.updateVehicle = {
  put: {
    tags: ["Fleet"], // operation's tag.
    summary: "Update Vehicles",
    description: "Update Vehicle", // short desc
    operationId: "updateVehicle", // unique operation id
    parameters: [
      // expected params
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
            $ref: "#/components/schemas/VehicleBodyUpdate",
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

// Vehicle Schema
exports.VehicleSchema = {
  Vehicle: {
    type: "object",
    properties: {
      vehicleId: {
        type: "string",
        description: "The auto-generated id of the vehicle",
      },
      plateNumber: {
        type: "string",
        description: "Plate Number of the vehicle",
      },
      seatingCapacity: {
        type: "integer",
      },
      saccoId: {
        type: "string",
        description: "saccoId of the vehicle",
      },
      saccoName: {
        type: "string",
      },
      routeId: {
        type: "string",
      },
      route: {
        type: "string",
      },
      isActive: {
        type: "boolean",
        description: "Status of the vehicle",
      },
      primaryTerminus: {
        type: "string",
      },
      secondaryTerminus: {
        type: "string",
      },
      createdAt: {
        type: "string",
      },
      modifiedAt: {
        type: "string",
      },
    },
    example: {
      message: "string",
      count: 0,
      data: [
        {
          vehicleId: "string",
          plateNumber: "string",
          seatingCapacity: 0,
          saccoId: "string",
          saccoName: "string",
          routeId: "string",
          route: "string",
          isActive: true,
          primaryTerminus: "string",
          secondaryTerminus: "string",
          createdAt: "2022-12-14T10:23:04.293Z",
          modifiedAt: "2022-12-14T10:23:04.293Z",
        },
      ],
    },
  },

  VehicleBody: {
    type: "object",
    properties: {
      plateNumber: {
        type: "string",
        required: true,
        description: "The auto-generated id of the vehicle",
      },
      seatingCapacity: {
        type: "integer",
        required: true,
      },
      saccoId: {
        type: "string",
        required: true,
        description: "saccoId of the vehicle",
      },
      fleetNumber: {
        type: "string",
        required: false,
        description: "saccoId of the vehicle",
      },
    },
    example: {
      plateNumber: "string",
      saccoId: "string",
      seatingCapacity: 0,
      fleetNumber: "string",
    },
  },

  VehicleBodyUpdate: {
    type: "object",
    properties: {
      vehicleId: {
        type: "string",
        required: true,
        description: "The auto-generated id of the vehicle",
      },
      plateNumber: {
        type: "string",
        required: false,
        description: "Plate Number of the vehicle",
      },
      seatingCapacity: {
        type: "integer",
        required: false,
      },
      saccoId: {
        type: "string",
        required: false,
        description: "Sacco under which to register a vehicle",
      },
      routeId: {
        type: "string",
        required: false,
        description: "Route to which the stage belongs",
      },
      fleetNumber: {
        type: "string",
        required: false,
        description: "Fleet number of the vehicle",
      },
    },
    example: {
      vehicleId: "string",
      plateNumber: "string",
      fleetNumber: "string",
      saccoId: "string",
      routeId: "string",
      seatingCapacity: 0,
    },
  },
};

//?  Operators Docs
exports.getOperators = {
  get: {
    tags: ["Fleet"], // operation's tag.
    summary: "Fetch all Operators",
    description: "Return list of all Operators",
    produces: ["application/json"],
    parameters: [
      {
        name: "offset", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "integer",
          description:
            "The number of items to skip before starting to collect the result set",
        },
      },
      {
        name: "pageSize", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "integer",
          description: "The numbers of items to return",
        },
      },
      {
        name: "vehicleId", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
        },
      },
    ],
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
        content: {
          // content-type
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/Operator", // data model
            },
          },
        },
      },
      // response code
      403: {
        description: "Forbidden", // response desc.
      },
      401: {
        description: "Unauthorized", // response desc.
        // content: {
        //   // content-type
        //   "application/json": {
        //     schema: {
        //       $ref: "#/components/responses/UnauthorizedError", // error data model
        //     },
        //   },
        // },
      },
    },
  },
};

exports.addOperator = {
  post: {
    tags: ["Fleet"], // operation's tag.
    summary: "Add Operators",
    description: "Create Operator",
    operationId: "createOperator", // unique operation id
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
            $ref: "#/components/schemas/OperatorBody",
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

exports.updateOperator = {
  put: {
    tags: ["Fleet"], // operation's tag.
    summary: "Update Operators",
    description: "Update Operator", // short desc
    operationId: "updateOperator", // unique operation id
    parameters: [
      // expected params
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
            $ref: "#/components/schemas/OperatorBodyUpdate",
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

// Operator Schema
exports.OperatorSchema = {
  Operator: {
    type: "object",
    properties: {
      vehicleId: {
        type: "string",
        description: "The auto-generated id of the vehicle",
      },
      plateNumber: {
        type: "string",
        description: "The auto-generated id of the vehicle",
      },
      fleetNumber: {
        type: "string",
      },
      role: {
        type: "string",
      },
      isActive: {
        type: "boolean",
        description: "Status of the vehicle",
      },
      createdAt: {
        type: "string",
      },
      modifiedAt: {
        type: "string",
      },
      user: {
        userId: {
          type: "string",
        },
        msisdn: {
          type: "string",
        },
        idNumber: {
          type: "string",
        },
        firstName: {
          type: "string",
        },
        middleName: {
          type: "string",
        },
        lastName: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
    },
    example: {
      message: "string",
      count: 0,
      data: [
        {
          vehicleId: "string",
          plateNumber: "string",
          fleetNumber: "string",
          role: "string",
          isActive: true,
          createdAt: "2022-12-14T10:59:10.607Z",
          modifiedAt: "2022-12-14T10:59:10.607Z",
          user: {
            userId: "string",
            msisdn: "string",
            idNumber: "string",
            firstName: "string",
            middleName: "string",
            lastName: "string",
            email: "string",
          },
        },
      ],
    },
  },

  OperatorBody: {
    type: "object",
    properties: {
      msisdn: {
        type: "string",
        required: true,
        description:
          "Phone number of the operator in INTERNATIONAl format. E.g. 2547XXXXXX or 2541XXXXXX",
      },
      vehicleId: {
        type: "string",
        required: true,
        description: "vehicleId of the operator",
      },
      role: {
        type: "enum",
        required: true,
        description:
          "Designation of a user to a vehicle. Can be one or multiple",
        Enumerator: ["Conductor", "Driver", "Owner"],
      },
      firstName: {
        type: "string",
        required: false,
        description: "First name of operator if available",
      },
      middleName: {
        type: "string",
        required: false,
        description: "Middle name of operator if available",
      },
      lastName: {
        type: "string",
        required: false,
        description: "Last name of operator if available",
      },
      accountNumber: {
        type: "string",
        required: false,
        description:
          "Account number of the preferred bank. If account number is provided, the other bank details must be provided",
      },
      bankName: {
        type: "string",
        required: false,
        description: "Bank to which account belongs",
      },
      bankBranch: {
        type: "string",
        required: false,
        description: "Branch of user account",
      },
      bankCode: {
        type: "string",
        required: false,
        description: "Bank code",
      },
    },
    example: {
      msisdn: "254725358366",
      vehicleId: "string",
      role: ["Conductor"],
      firstName: "string",
      middleName: "string",
      lastName: "string",
      accountNumber: "string",
      bankName: "string",
      bankBranch: "string",
      bankCode: "string",
    },
  },

  OperatorBodyUpdate: {
    type: "object",
    properties: {
      userId: {
        type: "string",
        required: true,
        description: "Identifier of the user with the system",
      },
      vehicleId: {
        type: "string",
        required: true,
        description: "vehicleId of the operator",
      },
      role: {
        type: "enum",
        required: true,
        description:
          "Designation of a user to a vehicle. Can be one or multiple",
        Enumerator: ["Conductor", "Driver", "Owner"],
      },
      activate: {
        type: "boolean",
        required: true,
        description:
          "Activate flag toggles active(activate: true) and inactive(activate: false) status of an operator role for a specified vehicle",
        example: ["true", "false"],
      },
    },
    example: {
      userId: "string",
      vehicleId: "string",
      role: "Conductor",
      activate: true,
    },
  },
};
