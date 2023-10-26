const express = require("express");
const User = require("../../Models/User.js");
const connectDb = require("../../connectDb.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  const user = Object.values(data); // converted user object to array
  //connect to database
  connectDb().then(async (con) => {
    // find if User Exists
    let result = await User.findUser(con, data.email);

    // dont create user if already exists
    if (result.length) {
      res.send({ msg: "User Exists" });
    }
    // create user
    else {
      await User.insertUser(con, user);
      res.send({ msg: "User Created" });
    }
    con.close();
  });
});

module.exports = router;
