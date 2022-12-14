const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const compression = require("compression");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middleware/error");
const swaggerDocs = require("./swagger");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

// Load env vars
dotenv.config();

// Route files
const auth = require("./routes/auth");
const fleet = require("./routes/fleet");
const sacco = require("./routes/sacco");

// Initialize express
const app = express();

// Body parser
app.use(express.json());

// Body-parser --responsible for parsing the incoming request bodies in a middleware before you handle it
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// compress responses
app.use(compression());

// Set security headers
app.use(helmet({ contentSecurityPolicy: false }));

// Prevent XSS attacks
app.use(xss());

// Rate limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);
app.set("trust proxy", 1);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Set static folder
const publicDirPath = path.join(__dirname, "/public");
app.use(express.static(publicDirPath));

// File extensions
app.use(
  express.static(publicDirPath, {
    extensions: ["html", "css", "js", "png", "jpg", "json", "ico"],
  })
);

// Set View's
app.set("", "/");
app.set("views", publicDirPath);

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
  swaggerOptions: {
    displayRequestDuration: true,
    docExpansion: "none",
    filter: false,
    showExtensions: true,
    showCommonExtensions: true,
    displayOperationId: false,
  },
};

// Mount Proxy endpoints routers
app.use("/api/v1/auth", auth);
app.use("/api/v1/fleet", fleet);
app.use("/api/v1/sacco", sacco);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(
    swaggerJSDoc({
      swaggerDefinition: swaggerDocs,
      apis: ["./server/*.js"],
    }),
    options
  )
);

// app.use(
//   "/api-docs",
//   function (req, res, next) {
//     swaggerDocs.host = req.get("host");
//     req.swaggerDoc = swaggerDocs;
//     next();
//   },
//   swaggerUI.serveFiles(swaggerDocs, options),
//   swaggerUI.setup()
// );

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.underline.bold);
  // Close server & exit process
  server.close(() => process.exit(1));
});
