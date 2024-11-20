const { Drivers, Teams } = require("../db");
const axios = require("axions");

class TeamsController {
  static URL = process.env.URL;

  async GetTeams(){
    try {
      const dbTeams = await Teams.findAll({
        include: {
          model: Teams,
          attributes: ["name"],
        }
      });
      if(dbTeams.length === 0){
        try {
          const { data } = await axios.get(`${TeamsController.URL}`);
          if(!data) throw new Error("Teams were not found");

          const allTeams = [];

          data.forEach((driver) => {
            const { teams } = driver;
            if(teams){
              const splitTeams = teams.split(',').map(teams => teams.trim());
              allTeams.push(...splitTeams);
            }
          });

          const removeDuplicate = new Set(allTeams);
          const orderArray = Array.from(removeDuplicate).sort();

          const driverTeams = orderArray.map((team) => {
            return { name: team };
          });

          const teams = await Teams.bulkCreate(driverTeams);
          return teams;
           
        } catch (error) {
          throw new Error({ error: error.message });
        }
      }
      return dbTeams;
    } catch (error) {
        throw new Error({ error: error.message });      
    }
  }
}

export default new TeamsController();