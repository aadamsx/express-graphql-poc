const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const graphqlSchema = require("../graphql/schema/index");
const graphqlResolvers = require("../graphql/resolvers/index");
const graphqlHttp = require("express-graphql");

const createConnection = require("./connection");

const { seedRigs, seedFleets, backfillFleetsWithRigs } = require("./seeder/seeder");

const startServer = async () => {
  const PORT = 3000;
  const app = express();

  app.use(cors());

  app.use(bodyParser.json());

  app.use(
    "/graphql",
    graphqlHttp({
      schema: graphqlSchema,
      rootValue: graphqlResolvers,
      graphiql: true
    })
  );

  await createConnection();

  const server = await app.listen(PORT);

  if (server) console.log(`GraphQL started on port: ${PORT}...`);

  // await seedFleets();
  // await seedRigs();
  // await backfillFleetsWithRigs();
  console.log(`seeding done...`)
};

module.exports = startServer;
