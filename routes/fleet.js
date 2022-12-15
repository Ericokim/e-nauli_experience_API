const express = require("express");
const {
  getVehicles,
  addVehicle,
  updateVehicle,
  getOperators,
  addOperator,
  updateOperator,
} = require("../controllers/fleet");

const router = express.Router();

const { protect, tokenAuth } = require("../middleware/auth");

// router.use(protect);
router.use(tokenAuth);
router.route("/getVehicles").get(getVehicles);
router.route("/addVehicle").post(addVehicle);
router.route("/updateVehicle").put(updateVehicle);
router.route("/getOperators").get(getOperators);
router.route("/addOperator").post(addOperator);
router.route("/updateOperator").put(updateOperator);

module.exports = router;
