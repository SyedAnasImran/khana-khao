const express = require("express");
const User = require("../Models/User.js");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  const login_creds = Object.values(data); // converts js object to array
  User.logIn(res, login_creds);
});

module.exports = router;
