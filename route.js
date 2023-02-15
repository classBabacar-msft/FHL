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

// Uploading a new quest
app.post("/quest", async (req, res) => {
  // TODO: make sure the body is valid
  await repo.addQuest(req.body);
  res.send({ message: "Uploaded Successfully." });
});

module.exports = app;
