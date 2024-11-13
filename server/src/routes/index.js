const driversRoutes = require("./driversRoutes");
const teamsRoutes = require("./teamsRoutes");
const { Router } = require("express");
const router = Router();

router.route("/api")
      .use("/drivers", driversRoutes)
      .use("/teams", teamsRoutes);

module.exports = router;
