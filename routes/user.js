const express = require("express");
const {
  getUsers,
  updateUser,
  updateUserStatus,
} = require("../controllers/user");

const router = express.Router();

router.route("/getUsers").get(getUsers);
router.route("/updateUser").put(updateUser);
router.route("/updateUserStatus").put(updateUserStatus);

module.exports = router;
