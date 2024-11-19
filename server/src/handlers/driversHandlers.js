const DriversController = require("../controller/driverController");

class DriversHandlers {
  async getAllDrivers(req, res) {
    try {
      const response = await this.getAllDrivers();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getDriverById(req, res) {
    try {
      const { id } = req.params;
      const response = await DriversController.getAllDrivers(id);

      if (!response) {
        return res.status(404).send("Id not found");
      }

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getDriversByName(req, res) {
    try {
      const { name } = req.query;
      const response = await DriversController.getDriversByName(name);

      if (!response) {
        return res.status(404).send("Driver name not found");
      }

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async setPostDriver(req, res) {
    try {
      const {
        forename,
        surname, 
        dob,
        nationality,
        number,
        url,
        code,
        teams,
        description
      }= req.body;
      const response = await DriversController.setPostDriver(
        forename,
        surname,
        dob,
        nationality,
        number,
        url,
        code,
        teams,
        description,
      );
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async setPutDriver(req, res) {
    try {
      const { id } = req.params;
      const {
        forename,
        surname,
        dob,
        nationality,
        number,
        url,
        code,
        teams,
        description,
      } = req.body;
      const response = await DriversController.setPutDriver(
        id,
        forename,
        surname,
        dob,
        nationality,
        number,
        url,
        code,
        teams,
        description
      );
      res.status(200).json(response);
    } catch (error) {}
    res.status(500).json({ error: error.message });
  }
  async setDeleteDriver(req, res) {
    try {
      try {
        const { id } = req.params;
        const response = await DriversController.setDeleteDriver(id);
        res.status(201).json(response);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } catch (error) {}
  }
}

module.exports = new DriversHandlers();
