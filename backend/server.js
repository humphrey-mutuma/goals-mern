const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("Hello there!!");
  res.send("Hello there");
});

app.listen(PORT, console.log(`Server running on port:${PORT}`));
