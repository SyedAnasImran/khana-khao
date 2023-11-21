const express = require("express");
const connectDb = require("../../connectDb.js");
const router = express.Router();
const Cafe = require("../../Models/Cafe");

router.get("/", (req, res) => {
  connectDb().then(async (con) => {
    const result = await Cafe.getName(con);
    res.send(result);
  });
});

module.exports = router;
