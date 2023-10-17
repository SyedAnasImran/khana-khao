const express = require("express");
const UserQuery = require("../Models/User.js");
const User = require("../Models/User.js");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  const login_creds = Object.values(data);
  User.logIn(res, login_creds);
});

module.exports = router;
