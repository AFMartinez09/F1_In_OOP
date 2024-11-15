const { Drivers, Teams } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

class DriversController {
  static URL = process.env.URL;
  static IMAGE_DEFAULT = 'https://assets-global.website-files.com/62afa9ef50108874342efc4a/62cb88cda33caab2deb799f5_Formula1-logo.png';
  // clean method 
  cleanApiFormulaOne(api){
    
    try {
      return api.map(drivers => ({
        id: drivers.id,
        name: drivers.forename.name,
        lastname: drivers.forename.lastname,
        dob: drivers.dob,
        nationality: drivers.nationality,
        number: drivers.number !== '\\N' ? drivers.number : 'Number not assigned',
        image: drivers.image.url != "" ? drivers.image : IMAGE_DEFAULT,
        code: drivers.code,
        teams: drivers.teams,
        description: drivers.teams,
      }))
    } catch (error) {
      console.error("Error cleaning API data: ", error);
      throw new Error("Failed clean API data");
      
    }
  }

  async getAllDrivers(){
    const dbDrivers = await Drivers.findAll({
      include:{
        model: Teams,
        attributes: ["name"],
        through: { attributes: []},
      }
    })
    if(dbDrivers.length === 0){
      try {
        // Fetching API data 
        const apiFormulaOne = await axios.get(DriversController.URL);
        const drivers = this.cleanApiFormulaOne(apiFormulaOne.data);
        // Adding data from API data to dbDrivers
        await Drivers.bulkCreate(drivers);
        return drivers
      } catch (error) {
        console.error("Error fetching drivers: ", error);
        throw new Error("Error calling data drivers: ", error);
      }
    }
    return dbDrivers;
  }

  async getDriversById(){
    try {
      
    } catch (error) {
      
    }
  }
  async getDriversByName(){

  }
  async postDriver(){
    try {
      
    } catch (error) {
      
    }
  }
  async putDriver(){
    try {
      
    } catch (error) {
      
    }
  }
  async deleteDriver(){
    
  }

}

module.exports = new DriversController();