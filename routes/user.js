const express = require("express");
const { getUsers } = require("../controllers/user");

const router = express.Router();

router.route("/getUsers").get(getUsers);

module.exports = router;
