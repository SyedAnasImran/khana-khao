const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const newUser = req.body;
  res.send(newUser);
  console.log(newUser);
});

module.exports = router;
