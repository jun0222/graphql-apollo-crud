const initPlayers = require("../data/players");

class PlayerService {
  constructor() {
    this.players = initPlayers;
  }

  findAll() {
    return this.players;
  }

  findByTeamId(teamId) {
    return this.players.filter((player) => player.teamId === teamId);
  }

  add(player) {
    const newPlayer = { ...player, id: String(Date.now()) };
    this.players = [...this.players, newPlayer];
    return newPlayer;
  }
}

module.exports = new PlayerService();
