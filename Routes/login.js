const express = require("express");
const UserQuery = require("../Models/User.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login Page");
});

module.exports = router;
