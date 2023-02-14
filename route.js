const express = require("express");
const app = express();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "FHL PROJECT!!!!" });
});

module.exports = app;
