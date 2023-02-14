const express = require("express");
const app = express();
const repo = require("./repository");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "FHL PROJECT!!!!" });
});

// Get list of quests
app.get("/quests", async (req, res) => {
  const quests = await repo.getQuests();
  res.json(quests);
});

module.exports = app;
