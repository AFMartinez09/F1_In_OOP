const DriversHandlers = require("../handlers/driversHandlers");
const express = require("express");
const router = express.Router();

router.get("/", DriversHandlers.getAllDrivers);

router.post("/", DriversHandlers.setPostDriver);

router.ger("/name", DriversHandlers.getDriversByName);

router.route("/:id")
      .get(DriversHandlers.getDriverById)
      .put(DriversHandlers.setPutDriver)
      .delete(DriversHandlers.setDeleteDriver);

