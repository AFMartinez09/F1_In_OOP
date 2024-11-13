const { Drivers } = require("../../models/Driver");

class DriversRepository{
  async getAllDrivers(){
    return await Drivers.findAll();
  }
  async getDriversById(id){
    try {
      return await Drivers.findByPk(id);
    } catch (error) {
      console.error("Could not found all drivers: ", error);
      throw error;
      
    }
  } 
  async getDriversByName(name){
    try {
      return await Drivers.findOne({ where: { name } });
    } catch (error) {
      console.error("Driver has not been found: ", error);
      throw error;
      
    }
  }
  async postDriver(driverData){
    try {
      return await Drivers.create(driverData);
    } catch (error) {
      console.error("Driver could not be created: ", error);
      throw error;
      
    }
  }
  async putDriver(id, updateData){
    try {
      const driverId = await Drivers.findByPk(id);
      if(driverId){
        await driverId.update(updateData);
        return driverId;
      }
    } catch (error) {
      console.error("Could not modify driver: ", error);
      throw error;
    }
  }
  async deleteDriver(id){
    try {
      const driverId = await Drivers.findByPk(id);
      if(driverId){
        await driverId.destroy();
        return { message: "Driver deleted"};
      }
    } catch (error) {
      console.error("Could not found driver: ", error);
      throw error;
      
    }
  }
}

module.exports = new DriversRepository();
