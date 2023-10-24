const express = require("express");
const User = require("../Models/User.js");
const router = express.Router();
const connectDb = require("../connectDb");

router.post("/", (req, res) => {
  const login_creds = req.body;

  // connect database
  connectDb().then(async (con) => {
    // check if user exists
    let result = await User.findUser(con, login_creds.email);

    // if user doesnt exist
    if (!result.length) {
      res.send({ msg: "User Not Found" });
    } else {
      // if user exist compare the password
      res.send({
        msg:
          login_creds.password === result[0].PASSWORD ? true : "Wrong Password",
      });
    }
    // close connection
    con.close();
  });
});

module.exports = router;
