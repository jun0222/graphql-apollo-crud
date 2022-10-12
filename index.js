// // // 別ファイルからimportする場合
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// // // 直接定義する場合
// // ApolloServerをimport
// const { ApolloServer, gql } = require("apollo-server");

// // DBの代わりにデータを定義
// const books = [
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "J.K. Rowling",
//   },
//   {
//     title: "Jurassic Park",
//     author: "Michael Crichton",
//   },
// ];

// // Schemaを定義
// const typeDefs = gql`
//   type Query {
//     books: [Book]
//   }

//   type Book {
//     title: String
//     author: String
//   }
// `;

// // Resolverを定義
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// // ApolloServerの初期化
// const server = new ApolloServer({ typeDefs, resolvers });

// // ApolloServerの起動
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
