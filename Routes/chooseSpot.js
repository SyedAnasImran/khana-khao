const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Choose Spot");
});

module.exports = router;
