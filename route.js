const express = require("express");
const app = express();
const repo = require("./repository");
const { displayQuests, displayQuest, displayButtons } = require("./htmlLogic");

// simple route
app.get("/", (req, res) => {
  const routing = [
    { buttonName: "View Quests", path: "/quests" },
    { buttonName: "Add A Quest", path: "/quest" },
  ];
  res.send(displayButtons(routing));
});

// Get list of quests
app.get("/quests", async (req, res) => {
  const quests = await repo.getQuests();
  res.send(displayQuests(quests));
});

// Get a specific Quest
app.get("/quest/:questTitle", async (req, res) => {
  const quest = await repo.getQuest(req.params.questTitle);
  res.send(displayQuest(quest));
});

// Uploading a new quest
app.post("/quest", async (req, res) => {
  // TODO: make sure the body is valid
  await repo.addQuest(req.body);
  res.send({ message: "Uploaded Successfully." });
});

module.exports = app;
