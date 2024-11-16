const TeamsHandlers = require("../handlers/teamsHandlers");
// const TeamsService = require("../service/TeamsService");
const express = require("express");
const router = express.Router();

router.get("/", TeamsHandlers.getTeams)
// router.get("/", TeamsService.getTeams);