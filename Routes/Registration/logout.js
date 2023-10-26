const express = require("express");
const router = express.Router();
const User = require("../../Models/User.js");
const connectDb = require("../../connectDb.js");

router.post("/", (req, res) => {
  connectDb().then(async (con) => {
    User.logOutUser(con);
    res.send({ msg: "LoggedOut" });
  });
});
module.exports = router;
