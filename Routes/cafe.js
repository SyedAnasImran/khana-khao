const express = require("express");
const connectDb = require("../connectDb.js");
const router = express.Router();
const Cafe = require("../Models/Cafe.js");

router.get("/names", (req, res) => {
  connectDb().then(async (con) => {
    const result = await Cafe.getName(con);
    res.send(result);
    con.close();
  });
});
router.post("/menu", (req, res) => {
  connectDb().then(async (con) => {
    const cafe_id = req.body.cafe_id;
    const result = await Cafe.getMenu(con, cafe_id);
    res.send(result);
    con.close();
  });
});

module.exports = router;
