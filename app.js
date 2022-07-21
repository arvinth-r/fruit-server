const express = require("express");
const FruitRoutes = require("./fruit-routes");
const bodyParser = require("body-parser");
//const cors = require("cors");
const ErrorService = require("./error-gen-service");
const PurchaseRoutes = require("./transaction-route");

const app = express();
const port = process.env.PORT || 1234;

const apiRoutes = express.Router();

// TODO-1: need to npm install and run to start up this fruit server

// setup the fruit routes
FruitRoutes.setup(apiRoutes);

// TODO-4: need to setup route for cart purchase
PurchaseRoutes.setup(apiRoutes);
//app.use(cors());
app.use(bodyParser.json());

// all REST api calls should be under api
app.use("/api", apiRoutes);

// basic get route for the system
app.get("/", (req, res) => {
  res.send("Welcome to fruit server 1.0.0");
});

// listening on the nodemon port configured in @see package.json
app.listen(port, (req, res) => {
  console.log(
    `fruit server started from nodemon and listening at http://localhost:${port}`
  );
});

// Custom Error handler for fruit server
app.use(ErrorService, function (err, req, res, next) {
  // TODO-5: handle common errors
  const status = err.status || 500;
  const message = err.message;
  res.status(status).json({
    message,
  });
});
