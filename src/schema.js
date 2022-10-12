const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Mutation {
    addPlayer(
      name: String!
      no: String!
      position: String!
      teamId: String!
    ): Player
  }
  type Team {
    id: ID!
    name: String!
    englishName: String
    foundingDate: String
    homeStadium: String
    players: [Player]
  }
  type Player {
    id: ID!
    name: String!
    no: String
    position: String
    team: Team
  }
`;

module.exports = typeDefs;
