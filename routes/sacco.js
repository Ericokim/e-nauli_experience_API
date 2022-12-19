const express = require("express");
const {
  getSaccos,
  getSacco,
  addSacco,
  updateSacco,
  getUserSaccos,
  updateSaccoStatus,
  getSaccoCharges,
  getSaccoCharge,
  addSaccoCharge,
  updateSaccoCharge,
  updateSaccoChargeStatus,
  SaccoBalance,
  getSaccosOfficials,
  getSaccosOfficial,
  addSaccosOfficial,
  updateSaccosOfficial,
  updateSaccosOfficialStatus,
  getSaccoStations,
  getSaccoStation,
  addSaccoStation,
  updateSaccoStation,
  updateSaccoStationStatus,
} = require("../controllers/sacco");

const router = express.Router();

const { protect, tokenAuth } = require("../middleware/auth");

// router.use(protect);
router.use(tokenAuth);
router.route("/getSaccos").get(getSaccos);
router.route("/getSacco/:id").get(getSacco);
router.route("/addSacco").post(addSacco);
router.route("/updateSacco").put(updateSacco);
router.route("/getUserSaccos/:id").get(getUserSaccos);
router.route("/updateSaccoStatus").put(updateSaccoStatus);

router.route("/getSaccoCharges").get(getSaccoCharges);
router.route("/getSaccoCharge/:id").get(getSaccoCharge);
router.route("/addSaccoCharge").post(addSaccoCharge);
router.route("/updateSaccoCharge").put(updateSaccoCharge);
router.route("/updateSaccoChargeStatus").put(updateSaccoChargeStatus);

router.route("/SaccoBalance").post(SaccoBalance);

router.route("/getSaccosOfficials").get(getSaccosOfficials);
router.route("/getSaccosOfficial/:id").get(getSaccosOfficial);
router.route("/addSaccosOfficial").post(addSaccosOfficial);
router.route("/updateSaccosOfficial").put(updateSaccosOfficial);
router.route("/updateSaccosOfficialStatus").put(updateSaccosOfficialStatus);

router.route("/getSaccoStations").get(getSaccoStations);
router.route("/getSaccoStation/:id").get(getSaccoStation);
router.route("/addSaccoStation").post(addSaccoStation);
router.route("/updateSaccoStation").put(updateSaccoStation);
router.route("/updateSaccoStationStatus").put(updateSaccoStationStatus);

module.exports = router;
