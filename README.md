# 目次

<!-- TOC -->

- [目次](#目次)
- [参考記事](#参考記事)
- [コマンド](#コマンド)
  - [graphql サーバー起動](#graphql-サーバー起動)
- [playground での操作例](#playground-での操作例)
  - [query](#query)
  - [mutation](#mutation)
    - [create](#create)
    - [delete](#delete)
      - [src/schema.js](#srcschemajs)
      - [src/resolver.js](#srcresolverjs)
      - [src/service/PlayerService.js](#srcserviceplayerservicejs)
    - [update](#update)

<!-- /TOC -->

# 参考記事

- [GraphQL Handson](https://graphql-handson-ozaki25.vercel.app/page3-2.html)
- [【GraphQL】データを追加・削除・更新する](https://www.azukipan.com/posts/graphql-add-delete-edit/)
- [React と Apollo で GraphQL を使った簡易 Todo リストを作成してみた](https://qiita.com/okumurakengo/items/ee1f9c8fb1bfa9fad797)
- [Apollo 要約](https://zenn.dev/smish0000/articles/42a0d6e0522ffa)

# コマンド

## graphql サーバー起動

```sh
node index.js
```

→ [http://localhost:4000/](http://localhost:4000/)でみられるようになる

# playground での操作例

## query

![picture 1](images/43abad9468758c8ce59f4a023f5da9aa9eb36da7bd81e2402d1984082096457b.gif)

## mutation

### create

![picture 2](images/9e31e9d2c8ced22e6dcd1523e410e3f1396060e69303b5375652d0c430b698e8.png)
mutation 実行

![picture 3](images/f261704a6f98387f12ebf80c798b564b108d14a54140d293103b01552c90ba21.png)  
query して追加を確認できる

### delete

#### src/schema.js

```ts
  type Mutation {
    # delete
    deletePlayer(id: String!): Boolean!
  }
```

スキーマに型定義追加

#### src/resolver.js

```js
const teamService = require("./service/TeamService");
const playerService = require("./service/PlayerService");

const resolver = {
  // 〜略〜

  Mutation: {
    // create
    addPlayer: (_, player) => {
      return playerService.add(player);
    },

    // delete
    deletePlayer: (_, { id }) => {
      const res = playerService.delete(id);
      return res;
    },
  },
};

module.exports = resolver;
```

リゾルバの Mutation に削除時の挙動として、
service 層の関数呼び出し追加。

#### src/service/PlayerService.js

```js
const initPlayers = require("../data/players");

class PlayerService {
  constructor() {
    this.players = initPlayers;
  }

  // 〜略〜

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
```

service 層に削除処理追加

### update
