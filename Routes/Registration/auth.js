const express = require("express");
const router = express.Router();
const User = require("../../Models/User.js");
const connectDb = require("../../connectDb.js");

router.get("/", (req, res) => {
  connectDb().then(async (con) => {
    //check if already loggedin
    let result = await User.isLoggedIn(con);
    res.send(result.length ? true : false);
  });
});
module.exports = router;
