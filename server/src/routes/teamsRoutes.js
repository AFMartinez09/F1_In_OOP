const TeamsService = require("../service/TeamsService");
const express = require("express");
const router = express.Router();

router.get("/", TeamsService.getTeams);