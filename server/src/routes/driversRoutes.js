const DriversHandlers = require("../handlers/driversHandlers");
// const DriversService = require("../service/DriversService");
const express = require("express");
const router = express.Router();

router.get("/", DriversHandlers.getAllDrivers);

router.post("/", DriversHandlers.postDriver);

router.ger("/name", DriversHandlers.getDriverByName);

router.route("/:id")
      .get(DriversHandlers.getDriverById)
      .put(DriversHandlers.putDriver)
      .delete(DriversHandlers.deleteDriver);

// router.get("/", DriversService.getAllDrivers);

// router.post("/", DriversService.postDriver);

// router.ger("/name", DriversService.getDriverByName);

// router.route("/:id")
//       .get(DriversService.getDriverById)
//       .put(DriversService.putDriver)
//       .delete(DriversService.deleteDriver);

