const { VehicleSchema, OperatorSchema } = require("./docsFleet");
const { SaccoSchema, SaccoChargeSchema } = require("./docsSacco");
const { SaccosOfficialSchema } = require("./docsSaccosOfficial");
const { SaccoStationSchema } = require("./docsSaccoStation");
const { AuthSchema } = require("./docsAuth");

// Schema Header
exports.header = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "E-nauli Experience API",
    description: "E-nauli Back-Office platform, experience API",
  },
  host: "localhost:5000",
  basePath: "/",
  license: {
    name: "Apache 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0.html",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
    // {
    //   url: "https://{username}.example.com:{port}/{basePath}",
    //   description: "Production server",
    //   variables: {
    //     username: {
    //       default: "demo",
    //       description:
    //         "this value is assigned by the service provider, in this example `gigantic-server.com`",
    //     },
    //     port: {
    //       enum: ["8443", "443"],
    //       default: "8443",
    //     },
    //     basePath: {
    //       default: "v2",
    //     },
    //   },
    // },
  ],
};

// Schema components
exports.components = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        description:
          "JWT Authorization header using the Bearer scheme. Enter in the value field: <b>{your JWT token}</b>",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },

    schemas: {
      //  Pagination Schema
      Pagination: {
        type: "object",
        properties: {
          count: {
            type: "number",
            description: "Total count of data",
            example: "0",
          },
          offset: {
            type: "number",
            description: "Page number",
            example: "0",
          },
          pageSize: {
            type: "number",
            description: "Page Size number",
            example: "10",
          },
          next: {
            type: "number",
            description: "Next page",
            example: "2",
          },
          previous: {
            type: "number",
            description: "Previous page",
            example: "1",
          },
        },
      },

      ...AuthSchema,
      ...VehicleSchema,
      ...OperatorSchema,
      ...SaccoSchema,
      ...SaccoChargeSchema,
      ...SaccosOfficialSchema,
      ...SaccoStationSchema,

      //  Error Schema
      Error: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          error: {
            type: "string",
          },
          internal_code: {
            type: "string",
          },
        },
      },
    },

    responses: {
      validationBadge: {
        description: "result of validation as valid/invalid badge",
        content: {
          "image/png": {
            schema: {
              type: "string",
              format: "binary",
            },
          },
        },
      },
      parseResponse: {
        description: "the parsed / resolved specification",
        content: {
          "application/json": {
            schema: {
              type: "string",
            },
          },
          "text/plain": {
            schema: {
              type: "string",
            },
          },
          "application/octet-stream": {
            schema: {
              type: "string",
              format: "binary",
            },
          },
        },
      },
    },
  },

  security: [
    {
      bearerAuth: [],
    },
  ],

  tags: [
    {
      name: "Auth",
    },
    {
      name: "Fleet",
    },
    {
      name: "Sacco",
    },
    {
      name: "Sacco Charge",
    },
    {
      name: "Sacco Official",
    },
    {
      name: "Sacco Station",
    },
  ],
};
