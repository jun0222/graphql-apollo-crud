const teamService = require("./service/TeamService");
const playerService = require("./service/PlayerService");

const resolver = {
  Query: {
    teams: () => {
      const teams = teamService.findAll();
      return teams.map((team) => ({
        ...team,
        players: playerService.findByTeamId(team.id),
      }));
    },
  },
  Mutation: {
    addPlayer: (_, player) => {
      return playerService.add(player);
    },
  },
};

module.exports = resolver;
