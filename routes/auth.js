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

router.use(protect);
router.route("/getToken").post(getToken);
router.route("/login").post(login);
router.get("/logout", logout);
router.route("/register").post(register);
router.route("/changePassword").put(tokenAuth, changePassword);
router.route("/resetPassword").put(resetPassword);
router.route("/verificationCode/:id").get(getVerificationCode);
router.route("/addWebProfile").put(addWebProfile);
router.route("/verifyCode").post(verifyCode);

module.exports = router;
