const express = require("express");
const User = require("../Models/User.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  const user = Object.values(data); // converted user object to array
  User.signUp(res, user);
});

module.exports = router;
