//?  SaccosOfficials Docs
exports.getSaccosOfficials = {
  get: {
    tags: ["Sacco Official"], // operation's tag.
    summary: "Fetch all Sacco Official",
    description: "Return list of all Sacco Official",
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
        name: "saccoStationId", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
        },
      },
      {
        name: "userId", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
        },
      },
      {
        name: "isActive", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
          enum: ["true", "false"],
        },
      },
      {
        name: "designation", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
          enum: [
            "Official",
            "Agent",
            "Clerk",
            "Fuel",
            "StationManager",
            "ParcelAgent",
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
              $ref: "#/components/schemas/SaccosOfficial", // data model
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

exports.getSaccosOfficial = {
  get: {
    tags: ["Sacco Official"], // operation's tag.
    summary: "Fetch single Sacco Official",
    description: "",
    operationId: "singleSaccosOfficial", // unique operation id
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
              $ref: "#/components/schemas/SaccosOfficial", // data model
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

exports.addSaccosOfficial = {
  post: {
    tags: ["Sacco Official"], // operation's tag.
    summary: "Add Sacco Official",
    description: "Create Sacco Official",
    operationId: "createSaccosOfficial", // unique operation id
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
            $ref: "#/components/schemas/SaccosOfficialBody",
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

exports.updateSaccosOfficial = {
  put: {
    tags: ["Sacco Official"], // operation's tag.
    summary: "Update Sacco Official",
    description: "Update Sacco Official", // short desc
    operationId: "updateSaccosOfficial", // unique operation id
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
            $ref: "#/components/schemas/SaccosOfficialBodyUpdate",
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

exports.updateSaccosOfficialStatus = {
  put: {
    tags: ["Sacco Official"], // operation's tag.
    summary: "Update Sacco Official Status",
    description: "Update Sacco Official Status", // short desc
    operationId: "updateSaccosOfficialStatus", // unique operation id
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
            $ref: "#/components/schemas/SaccosOfficialBodyStatusUpdate",
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

// Saccos Official Schema
exports.SaccosOfficialSchema = {
  SaccosOfficial: {
    type: "object",
    properties: {
      saccoOfficialId: {
        type: "string",
      },
      saccoId: {
        type: "string",
      },
      saccoStationId: {
        type: "string",
      },
      designation: {
        type: "string",
      },
      isActive: {
        type: "boolean",
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
      sacco: {
        saccoId: {
          type: "string",
        },
        name: {
          type: "string",
        },
      },
      saccoStation: {
        saccoStationId: {
          type: "string",
        },
        name: {
          type: "string",
        },
      },
    },
    example: {
      message: "string",
      count: 0,
      data: [
        {
          saccoOfficialId: "string",
          saccoId: "string",
          saccoStationId: "string",
          designation: "string",
          isActive: true,
          createdAt: "2022-12-14T12:54:28.481Z",
          modifiedAt: "2022-12-14T12:54:28.481Z",
          user: {
            userId: "string",
            msisdn: "string",
            idNumber: "string",
            firstName: "string",
            middleName: "string",
            lastName: "string",
            email: "string",
          },
          sacco: {
            saccoId: "string",
            name: "string",
          },
          saccoStation: {
            saccoStationId: "string",
            name: "string",
          },
        },
      ],
    },
  },

  SaccosOfficialBody: {
    type: "object",
    properties: {
      saccoId: {
        type: "string",
        required: true,
        description: "Identifier of sacco to which a user is an official",
      },
      msisdn: {
        type: "string",
        required: true,
        description:
          "Phone number of the sacco official in INTERNATIONAl format. E.g. 2547XXXXXX or 2541XXXXXX",
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
        required: true,
        description:
          "Optional. Sacco Station assigned to the profile/user getting created",
      },
    },
    example: {
      saccoId: "string",
      msisdn: "254134936156",
      designation: "Official",
      saccoStationId: "string",
    },
  },

  SaccosOfficialBodyUpdate: {
    type: "object",
    properties: {
      saccoOfficialId: {
        type: "string",
        required: true,
        description: "Sacco charge identifier",
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
        required: true,
        description:
          "Optional. Sacco Station assigned to the profile/user getting created",
      },
    },
    example: {
      saccoOfficialId: "string",
      saccoStationId: "string",
      designation: "Official",
    },
  },

  SaccosOfficialBodyStatusUpdate: {
    type: "object",
    properties: {
      saccoOfficialId: {
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
      saccoOfficialId: "string",
      activate: true,
    },
  },
};
