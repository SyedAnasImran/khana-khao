const connectDb = require("./dbconfig.js");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

connectDb();
// Landing Route
app.get("/", (req, res) => {
  res.send("Landing");
});

// Avaailable Routes
app.use(cors());
app.use(express.json());
app.use("/reg", require("./Routes/registration.js"));
app.use("/chooseSpot", require("./Routes/chooseSpot.js"));

// Going Live
app.listen(port, () => {
  console.log("Listening On port", port);
});
