const userResolver = require("./users");
const eventResolver = require("./events");
const bookingResolver = require("./booking");
const fleetsResolver = require("./fleets");
const rigsResolver = require("./rigs");

const rootResolver = {
  ...userResolver,
  ...eventResolver,
  ...bookingResolver,
  ...fleetsResolver,
  ...rigsResolver
}

module.exports = rootResolver;
