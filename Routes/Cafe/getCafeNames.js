const express = require("express");
const connectDb = require("../../connectDb.js");
const router = express.Router();
const Cafe = require("../../Models/Cafe");

router.get("/", (req, res) => {
  connectDb().then(async (con) => {
    const r = await Cafe.getName(con);
    res.send(r);
  });
});

module.exports = router;
