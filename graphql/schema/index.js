const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Rig {
    _id: ID!
    title: String
    operator: String
    manager: String
    status: String
    kpis: [Kpi!]!
    fleet: Fleet
  }
  type Kpi {
    area: String
    indicator: Int
    status: String
  }
  type Fleet {
    _id: ID!
    title: String
    rigs: [Rig!]
  }


  type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String  
    creator: User!
  }

  type User {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String  
  }

  input UserInput {
    email: String!
    password: String!
  }

  type RootQuery {
    rigs: [Rig!]!
    fleets: [Fleet!]!
    events: [Event!]!
    bookings: [Booking!]!
  }

  type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
