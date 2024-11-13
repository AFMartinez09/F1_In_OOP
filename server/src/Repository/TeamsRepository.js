const { Teams } = require("../../models/Teams");

class TeamsRepository{
  async getTeam( teamsData ){
    try {
      return await Teams.findAll( teamsData );
    } catch (error) {
      console.error("Teams could not find it: ", error);
      throw error;
    }
  }
}

module.exports = new TeamsRepository();