//**  @document  GET /api/v1/sacco */

//? Sacco Docs
exports.getSaccos = {
  get: {
    tags: ["Sacco"], // operation's tag.
    summary: "Fetch all Saccos",
    description: "Return list of all Saccos",
    operationId: "allSacco", // unique operation id
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
              $ref: "#/components/schemas/Sacco", // data model
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

exports.getSacco = {
  get: {
    tags: ["Sacco"], // operation's tag.
    summary: "Fetch single Sacco",
    description: "",
    operationId: "singleSacco", // unique operation id
    produces: ["application/json"],
    parameters: [
      {
        name: "id", // name of param
        in: "path", // location of param
        required: true, // mandatory
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
              $ref: "#/components/schemas/Sacco", // data model
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
      },
      404: {
        description: "Not found",
      },
    },
  },
};

exports.addSacco = {
  post: {
    tags: ["Sacco"], // operation's tag.
    summary: "Add Sacco",
    description: "Create Sacco",
    operationId: "createSacco", // unique operation id
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
            $ref: "#/components/schemas/SaccoBody",
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

exports.updateSacco = {
  put: {
    tags: ["Sacco"], // operation's tag.
    summary: "Update Sacco",
    description: "Update Sacco", // short desc
    operationId: "updateSacco", // unique operation id
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
            $ref: "#/components/schemas/SaccoBodyUpdate",
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

exports.updateSaccoStatus = {
  put: {
    tags: ["Sacco"], // operation's tag.
    summary: "Update Sacco Status",
    description: "Update Sacco Status", // short desc
    operationId: "updateSaccoStatus", // unique operation id
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
            $ref: "#/components/schemas/SaccoBodyStatusUpdate",
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

exports.SaccoBalance = {
  post: {
    tags: ["Sacco"], // operation's tag.
    summary: "Sacco Balance",
    description: "Gets specified sacco account running balance in cents",
    operationId: "SaccoBalance", // unique operation id
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
            $ref: "#/components/schemas/SaccoBalanceBody",
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

// Sacco Schema
exports.SaccoSchema = {
  Sacco: {
    type: "object",
    properties: {
      saccoId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      address: {
        type: "string",
      },
      contactPerson: {
        type: "string",
      },
      contactNumber: {
        type: "string",
      },
      postalAddress: {
        type: "string",
      },
      pin: {
        type: "string",
      },
      senderId: {
        type: "string",
      },
      isActive: {
        type: "boolean",
      },
      tagline: {
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
          saccoId: "string",
          name: "string",
          address: "string",
          contactPerson: "string",
          contactNumber: "string",
          postalAddress: "string",
          pin: "string",
          senderId: "string",
          isActive: true,
          tagline: "string",
          createdAt: "2022-12-14T11:36:50.806Z",
          modifiedAt: "2022-12-14T11:36:50.807Z",
        },
      ],
    },
  },

  SaccoBody: {
    type: "object",
    properties: {
      pin: {
        type: "string",
        required: true,
        description: "Sacco PIN",
      },
      name: {
        type: "string",
        required: true,
        description: "Sacco Name",
      },
      senderId: {
        type: "string",
        required: false,
        description: "Sacco specific sender id if it exists",
      },
      address: {
        type: "string",
        required: false,
        description:
          "Where the sacco main office is located e.g. Mezza Office, 2nd Floor Karatina",
      },
      contactPerson: {
        type: "string",
        required: false,
        description: "Name of saccos contact person",
      },
      contactNumber: {
        type: "string",
        required: false,
        description: "The contact number of the contact person",
      },
      postalAddress: {
        type: "string",
        required: false,
        description:
          "Box address of the sacco. E.g P.O. Box 34-00200 or P.O. Box 2399",
      },
      tagline: {
        type: "string",
        required: false,
        description:
          "The tagline to be used in sacco receipts - expense, parcel and any other receipts",
      },
      code: {
        type: "string",
        required: false,
        description:
          "Optional. Is a unique 2-Letter prefix to be used when a sacco uses fleet number to identify vehicles",
      },
      region: {
        type: "string",
        required: false,
        description: "Region within which the sacco operates",
      },
      primaryTerminus: {
        type: "string",
        required: false,
        description: "Main Terminus of the route - mostly Nairobi",
      },
      secondaryTerminus: {
        type: "string",
        required: false,
        description: "Secondary Terminus of the route",
      },
      maximumFare: {
        type: "string",
        required: false,
        description: "Maximum fare for the route. In CENTS",
      },
      platformFee: {
        type: "string",
        required: false,
        description: "Fees incurred for using E-Nauli platform. In CENTS",
      },
    },
    example: {
      pin: "1995",
      name: "kimSACCO",
      senderId: "string",
      address: "string",
      contactPerson: "Eric",
      contactNumber: "254713081296",
      postalAddress: "3329",
      tagline: "string",
      code: "95",
      region: "thika",
      primaryTerminus: "thika",
      secondaryTerminus: "nairobi",
      maximumFare: 100,
      platformFee: 10,
    },
  },

  SaccoBodyUpdate: {
    type: "object",
    properties: {
      saccoId: {
        type: "string",
        required: true,
        description: "Sacco identifier",
      },
      pin: {
        type: "string",
        required: false,
        description: "Sacco PIN",
      },
      name: {
        type: "string",
        required: false,
        description: "Sacco Name",
      },
      senderId: {
        type: "string",
        required: false,
        description: "Sacco specific sender id if it exists",
      },
      address: {
        type: "string",
        required: false,
        description:
          "Where the sacco main office is located e.g. Mezza Office, 2nd Floor Karatina",
      },
      contactPerson: {
        type: "string",
        required: false,
        description: "Name of saccos contact person",
      },
      contactNumber: {
        type: "string",
        required: false,
        description: "The contact number of the contact person",
      },
      postalAddress: {
        type: "string",
        required: false,
        description:
          "Box address of the sacco. E.g P.O. Box 34-00200 or P.O. Box 2399",
      },
      tagline: {
        type: "string",
        required: false,
        description:
          "The tagline to be used in sacco receipts - expense, parcel and any other receipts",
      },
    },
    example: {
      saccoId: "string",
      pin: "string",
      senderId: "string",
      name: "string",
      address: "string",
      contactPerson: "string",
      contactNumber: "string",
      postalAddress: "string",
      tagline: "string",
    },
  },

  SaccoBalanceBody: {
    type: "object",
    properties: {
      userId: {
        type: "string",
        required: true,
        description:
          "Sacco officials users identifier. Can be 0 for admin look up calls",
      },
      saccoId: {
        type: "string",
        required: true,
        description: "Sacco identifier",
      },
    },
    example: {
      userId: "617851833I133121",
      saccoId: "string",
    },
  },

  SaccoBodyStatusUpdate: {
    type: "object",
    properties: {
      id: {
        type: "string",
        required: true,
        description: "Identifier of the entity to toggle status",
      },
      activate: {
        type: "boolean",
        required: true,
        description:
          "Activate flag toggles active(activate: true) and inactive(activate: false) status",
        example: ["true", "false"],
      },
    },
    example: {
      id: "string",
      activate: true,
    },
  },
};

//?  SaccoCharges Docs
exports.getSaccoCharges = {
  get: {
    tags: ["Sacco Charge"], // operation's tag.
    summary: "Fetch all Sacco Charges",
    description: "Return list of all Sacco Charges",
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
        name: "charge", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
          enum: [
            "PlatformCharge",
            "StatementCharge",
            " ManifestCharge",
            "ParcelCharge",
          ],
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
              $ref: "#/components/schemas/SaccoCharge", // data model
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

exports.getSaccoCharge = {
  get: {
    tags: ["Sacco Charge"], // operation's tag.
    summary: "Fetch single Sacco Charge",
    description: "",
    operationId: "singleSaccoCharge", // unique operation id
    produces: ["application/json"],
    parameters: [
      {
        name: "id", // name of param
        in: "path", // location of param
        required: true, // mandatory
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
              $ref: "#/components/schemas/SaccoCharge", // data model
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
      },
      404: {
        description: "Not found",
      },
    },
  },
};

exports.addSaccoCharge = {
  post: {
    tags: ["Sacco Charge"], // operation's tag.
    summary: "Add Sacco Charge",
    description: "Create SaccoCharge",
    operationId: "createSaccoCharge", // unique operation id
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
            $ref: "#/components/schemas/SaccoChargeBody",
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

exports.updateSaccoCharge = {
  put: {
    tags: ["Sacco Charge"], // operation's tag.
    summary: "Update Sacco Charges",
    description: "Update Sacco Charge", // short desc
    operationId: "updateSaccoCharge", // unique operation id
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
            $ref: "#/components/schemas/SaccoChargeBodyUpdate",
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

exports.updateSaccoChargeStatus = {
  put: {
    tags: ["Sacco Charge"], // operation's tag.
    summary: "Update Sacco Charge Status",
    description: "Update Sacco Charge Status", // short desc
    operationId: "updateSaccoChargeStatus", // unique operation id
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
            $ref: "#/components/schemas/SaccoChargeBodyStatusUpdate",
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

// Sacco Charge Schema
exports.SaccoChargeSchema = {
  SaccoCharge: {
    type: "object",
    properties: {
      saccoChargeId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      saccoId: {
        type: "string",
      },
      saccoName: {
        type: "string",
      },
      charge: {
        type: "enum",
        Enumerator: [
          "PlatformCharge",
          "StatementCharge",
          " ManifestCharge",
          "ParcelCharge",
        ],
      },
      isPercentage: {
        type: "boolean",
      },
      amount: {
        type: "number",
      },
      isActive: {
        type: "boolean",
      },
      frequency: {
        type: "enum",
        Enumerator: [
          "PerTrip",
          "PerDay",
          "PerWeek",
          "PerMonth",
          "PerAnnum",
          "OneOff",
          "PerSMS",
        ],
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
          saccoChargeId: "string",
          name: "string",
          saccoId: "string",
          saccoName: "string",
          charge: "PlatformCharge",
          isPercentage: true,
          amount: 0,
          isActive: true,
          frequency: "PerTrip",
          createdAt: "2022-12-14T12:11:38.578Z",
          modifiedAt: "2022-12-14T12:11:38.578Z",
        },
      ],
    },
  },

  SaccoChargeBody: {
    type: "object",
    properties: {
      saccoId: {
        type: "string",
        required: true,
        description: "Sacco identifier",
      },
      charge: {
        type: "enum",
        required: true,
        Enumerator: [
          "PlatformCharge",
          "StatementCharge",
          " ManifestCharge",
          "ParcelCharge",
        ],
      },
      isPercentage: {
        type: "boolean",
        required: true,
      },
      amount: {
        type: "number",
      },

      frequency: {
        type: "enum",
        Enumerator: [
          "PerTrip",
          "PerDay",
          "PerWeek",
          "PerMonth",
          "PerAnnum",
          "OneOff",
          "PerSMS",
        ],
      },
    },
    example: {
      saccoId: "string",
      charge: "PlatformCharge",
      isPercentage: true,
      amount: 0,
      frequency: "PerTrip",
    },
  },

  SaccoChargeBodyUpdate: {
    type: "object",
    properties: {
      saccoChargeId: {
        type: "string",
        required: true,
        description: "Sacco charge identifier",
      },
      isPercentage: {
        type: "boolean",
        required: true,
      },
      amount: {
        type: "number",
      },

      frequency: {
        type: "enum",
        Enumerator: [
          "PerTrip",
          "PerDay",
          "PerWeek",
          "PerMonth",
          "PerAnnum",
          "OneOff",
          "PerSMS",
        ],
      },
    },
    example: {
      saccoChargeId: "string",
      isPercentage: true,
      amount: 0,
      frequency: "PerTrip",
    },
  },

  SaccoChargeBodyStatusUpdate: {
    type: "object",
    properties: {
      id: {
        type: "string",
        required: true,
        description: "Identifier of the entity to toggle status",
      },
      activate: {
        type: "boolean",
        required: true,
        description:
          "Activate flag toggles active(activate: true) and inactive(activate: false) status",
        example: ["true", "false"],
      },
    },
    example: {
      id: "string",
      activate: true,
    },
  },
};
