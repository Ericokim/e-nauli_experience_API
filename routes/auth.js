const express = require("express");
const {
  getToken,
  register,
  login,
  logout,
  changePassword,
  resetPassword,
  addWebProfile,
  verifyCode,
  getVerificationCode,
} = require("../controllers/auth");

const router = express.Router();

const { protect, tokenAuth } = require("../middleware/auth");

// router.use(protect);
router.route("/getToken").post(getToken);
router.route("/login").post(protect, login);
router.get("/logout", logout);
router.route("/register").post(protect, register);
router.route("/changePassword").put(tokenAuth, changePassword);
router.route("/resetPassword").put(protect, resetPassword);
router.route("/verificationCode/:id").get(protect, getVerificationCode);
router.route("/addWebProfile").put(tokenAuth, protect, addWebProfile);
router.route("/verifyCode").post(protect, verifyCode);

module.exports = router;
