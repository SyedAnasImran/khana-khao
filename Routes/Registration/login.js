const express = require("express");
const User = require("../../Models/User.js");
const router = express.Router();
const connectDb = require("../../connectDb.js");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const user = req.body;
  const jwtSecret = "Anas@anas";

  // connect database
  connectDb().then(async (con) => {
    // check if user exists
    result = await User.findUser(con, user.email);

    // if user doesnt exist
    if (!result.length) {
      res.send({ msg: "User Not Found" });
    } else {
      // if user exist compare the password
      let token = null;
      let msg = "Wrong Password";

      //if Password Matches
      if (user.password === result[0].PASSWORD) {
        token = jwt.sign(user, jwtSecret);
        msg = "Logged In";
      }
      // send login  response to frontend
      res.send({ token, msg });
    }
    // close connection
    con.close();
  });
});

module.exports = router;
