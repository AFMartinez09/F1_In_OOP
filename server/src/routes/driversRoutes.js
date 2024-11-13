const DriversService = require("../service/DriversService");
const express = require("express");
const router = express.Router();

router.get("/", DriversService.getAllDrivers);

router.post("/", DriversService.postDriver);

router.ger("/name", DriversService.getDriverByName);

router.route("/:id")
      .get(DriversService.getDriverById)
      .put(DriversService.putDriver)
      .delete(DriversService.deleteDriver);

