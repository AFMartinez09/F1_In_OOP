const DriversController = require("../controller/driverController");

class DriversHandlers{

  async getAllDrivers(req, res){
      try {
        const response = await DriversController.getAllDrivers();
      } catch (error) {
        
      }
  }
  async getDriverById(req, res){
    try {
      const response = await this.getAllDrivers();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getDriversByName(req, res){
    try {
      
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
      
    } catch (error) {
      
    }
  }
}

module.exports = new DriversHandlers();