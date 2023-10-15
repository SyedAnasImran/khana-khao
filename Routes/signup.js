const express = require("express");
const User = require("../Models/User.js");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  const user = [Object.values(data)]; // converted user object to array
  User.insertUser(user);
});

module.exports = router;
