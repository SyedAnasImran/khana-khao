const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Landing Route
app.get("/", (req, res) => {
  res.send("Landing");
});

app.use(cors());
app.use(express.json());

// Registration Routes
app.use("/login", require("./Routes/Registration/login.js"));
app.use("/signup", require("./Routes/Registration/signup.js"));

// Cafe Routes
app.use("/cafe", require("./Routes/Cafe/cafe.js"));

// Going Live
app.listen(port, () => {
  console.log("Listening On port", port);
});
