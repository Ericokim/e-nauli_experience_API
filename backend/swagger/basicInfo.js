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
    description:
      "Experience API for E-nauli Application to manage fleet and sacco.",
  },
  host: "localhost:5000",
  basePath: "/",
  // license: {
  //   name: "Apache 2.0",
  //   url: "https://www.apache.org/licenses/LICENSE-2.0.html",
  // },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Dev_Server",
    },
    {
      url: "https://e-nauli-experience-api-gbhg.vercel.app",
      description: "Prod_Server",
    },
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
      // ApiKeyAuth: { type: "apiKey", in: "header", name: "x-server-key" },
    },

    schemas: {
      ...AuthSchema,
      ...VehicleSchema,
      ...OperatorSchema,
      ...SaccoSchema,
      ...SaccoChargeSchema,
      ...SaccosOfficialSchema,
      ...SaccoStationSchema,
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
