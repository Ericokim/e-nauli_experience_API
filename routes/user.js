const express = require("express");
const {
  getUsers,
  updateUser,
  updateUserStatus,
  getUserByPhone,
} = require("../controllers/user");

const router = express.Router();

router.route("/getUsers").get(getUsers);
router.route("/updateUser").put(updateUser);
router.route("/updateUserStatus").put(updateUserStatus);
router.route("/getUserByPhone/:id").get(getUserByPhone);

module.exports = router;
