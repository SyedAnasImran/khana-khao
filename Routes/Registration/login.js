const express = require("express");
const User = require("../../Models/User.js");
const router = express.Router();
const connectDb = require("../../connectDb.js");

router.post("/", (req, res) => {
  const login_creds = req.body;
  console.log("object");
  // connect database
  connectDb().then(async (con) => {
    // check if user exists
    result = await User.findUser(con, login_creds.email);

    // if user doesnt exist
    if (!result.length) {
      res.send({ msg: "User Not Found" });
    } else {
      // if user exist compare the password
      let isMatched =
        login_creds.password === result[0].PASSWORD ? true : "Wrong Password";

      // save session in db if logged in
      if (isMatched === true) {
        await User.insertLoggedIn(con, login_creds.email);
        console.log("User LoggedIn");
      }
      // send login  response to frontend
      res.send({
        msg: isMatched,
      });
    }
    // close connection
    con.close();
  });
});

module.exports = router;
