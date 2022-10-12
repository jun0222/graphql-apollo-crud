const initTeams = require("../data/team");

class TeamService {
  constructor() {
    this.teams = initTeams;
  }
  findAll() {
    return this.teams;
  }
  findById(id) {
    return this.teams.find((team) => team.id === id);
  }
  add(team) {
    const newTeam = { ...team, id: Date.now() };
    this.teams = [...this.teams, newTeam];
    return newTeam;
  }
}

module.exports = new TeamService();
