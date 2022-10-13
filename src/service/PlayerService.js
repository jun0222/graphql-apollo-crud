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

  // 削除
  delete(id) {
    // 引数で受け取ったidを元に、該当idのplayerを除いたplayersの新しい配列作成
    const newPlayers = this.players.filter((player) => player.id !== id);

    // 削除してplayersの数が減っているか
    const isDelete =
      this.players.length - newPlayers.length === 1 ? true : false;

    // 新しい配列を既存のplayersと置き換え
    this.players = newPlayers;

    // 成功、失敗をreturn
    return isDelete;
  }
}

module.exports = new PlayerService();
