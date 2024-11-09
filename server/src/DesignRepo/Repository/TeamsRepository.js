const { Teams } = require("../../models/Teams");

class TeamsRepository{
  async postTeam( teamsData ){
    try {
      return await Teams.create( teamsData );
    } catch (error) {
      console.error("Teams could not be created: ", error);
      throw error;
    }
  }
}