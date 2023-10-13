const express = require("express");
const connectDb = require("../connectDb.js");
const query = require("../Models/User.js");
const router = express.Router();

router.post("/", (req, res) => {
  // const newUser = req.body;
  // res.send(newUser);
  // console.log(newUser);
  connectDb().then(async (orcl) => {
    console.log(orcl);
    const data = await orcl.execute(query());
    const result = data.rows;
    console.log(result);
  });
});

module.exports = router;
