const TeamsHandlers = require("../handlers/teamsHandlers");
const express = require("express");
const router = express.Router();

router.get("/", TeamsHandlers.getTeams)
