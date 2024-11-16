const DriversController = require("../controller/driverController");

class DriversHandlers{

  async getAllDrivers(req, res){
    try {
      const response = await this.getAllDrivers();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getDriverById(req, res){
    try {
      const { id } = req.params;
      const response = await DriversController.getAllDrivers(id);
      
      if(!response){
        return res.status(404).send("Id not found");
      }
      
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }
  async getDriversByName(req, res){
    try {
      const { name } = req.query;
      const response = await this.getDriversByName(name);
      
      if(!response){
        return res.status(404).send("Driver name not found");
      }

      res.status(201).json(response);
    } catch (error) {
      
    }
  }
  async setPostDriver(req, res){
    try {
      
    } catch (error) {
      
    }
  }
  async setPutDriver(req, res){
    try {
      
    } catch (error) {
      
    }
  }
  async setDeleteDriver(req, res){
    try {
      const { id } = req.body.params;
      
    } catch (error) {
      
    }
  }
}

module.exports = new DriversHandlers();