const TeamsService = require("../service/TeamsService");

class TeamsHandlers {
  async getTeams(req, res){
    try {
      const response = await TeamsService.getTeams();
      res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new TeamsHandlers();