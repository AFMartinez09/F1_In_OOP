const DriversService = require("../service/DriversService");

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
      const response = await DriversService.getAllDrivers(id);

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
      const response = await DriversService.getDriversByName(name);

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
      const response = await DriversService.setPostDriver(
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
      const response = await DriversService.setPutDriver(
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
        const { id } = req.params;
        const response = await DriversService.setDeleteDriver(id);
        res.status(201).json(response);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
}

module.exports = new DriversHandlers();
