//?  SaccoStations Docs
exports.getSaccoStations = {
  get: {
    tags: ["Sacco Station"], // operation's tag.
    summary: "Fetch all Sacco Station",
    description: "Return list of all Sacco Station",
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
        name: "isActive", // name of the param
        in: "query", // location of the param
        required: false, // Mandatory param
        schema: {
          type: "string",
          description: "Filter operations",
          enum: ["true", "false"],
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
              $ref: "#/components/schemas/SaccoStation", // data model
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

exports.getSaccoStation = {
  get: {
    tags: ["Sacco Station"], // operation's tag.
    summary: "Fetch single Sacco Station",
    description: "",
    operationId: "singleSaccoStation", // unique operation id
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
              $ref: "#/components/schemas/SaccoStation", // data model
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

exports.addSaccoStation = {
  post: {
    tags: ["Sacco Station"], // operation's tag.
    summary: "Add Sacco Station",
    description: "Create Sacco Station",
    operationId: "createSaccoStation", // unique operation id
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
            $ref: "#/components/schemas/SaccoStationBody",
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

exports.updateSaccoStation = {
  put: {
    tags: ["Sacco Station"], // operation's tag.
    summary: "Update Sacco Station",
    description: "Update Sacco Station", // short desc
    operationId: "updateSaccoStation", // unique operation id
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
            $ref: "#/components/schemas/SaccoStationBodyUpdate",
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

exports.updateSaccoStationStatus = {
  put: {
    tags: ["Sacco Station"], // operation's tag.
    summary: "Update Sacco Station Status",
    description: "Update Sacco Station Status", // short desc
    operationId: "updateSaccoStationStatus", // unique operation id
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
            $ref: "#/components/schemas/SaccoStationBodyStatusUpdate",
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
exports.SaccoStationSchema = {
  SaccoStation: {
    type: "object",
    properties: {
      saccoStationId: {
        type: "string",
      },
      saccoId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      isActive: {
        type: "boolean",
      },
      phoneNumber: {
        type: "string",
      },
    },
    example: {
      message: "string",
      count: 0,
      data: [
        {
          saccoStationId: "string",
          saccoId: "string",
          name: "string",
          isActive: true,
          phoneNumber: "string",
        },
      ],
    },
  },

  SaccoStationBody: {
    type: "object",
    properties: {
      saccoId: {
        type: "string",
        required: true,
        description: "Identifier of sacco",
      },
      stations: [
        {
          name: {
            type: "string",
            required: true,
            description: "Name of the station",
          },
          phoneNumber: {
            type: "string",
            required: false,
            description:
              "Contact line for the sacco station or their preferred number",
          },
        },
      ],
    },
    example: {
      saccoId: "string",
      stations: [
        {
          name: "string",
          phoneNumber: "string",
        },
      ],
    },
  },

  SaccoStationBodyUpdate: {
    type: "object",
    properties: {
      saccoStationId: {
        type: "string",
        required: true,
        description: "id for the station",
      },
      saccoId: {
        type: "string",
        required: false,
        description: "Id for the sacco the station is tied to",
      },
      name: {
        type: "string",
        required: false,
        description: "Name of station",
      },
      phoneNumber: {
        type: "string",
        required: false,
        description:
          "Contact line for the sacco station or their preferred number",
      },
    },
    example: {
      saccoStationId: "string",
      saccoId: "string",
      name: "string",
      phoneNumber: "string",
    },
  },

  SaccoStationBodyStatusUpdate: {
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
