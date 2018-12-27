const bcrypt = require("bcrypt");
const Event = require("../../models/event");
const User = require("../../models/user");
const Booking = require("../../models/bookings");
const Rigs = require("../../models/rigs");
const Fleet = require("../../models/fleet");

const transformEvent = event => {
  return {
    ...event._doc,
    _id: event._doc._id.toString(),
    date: new Date(event._doc.date).toISOString(),
    creator: user.bind(this, event.creator)
  };
}

const singleFleet = async fleetId => {
  try {
    const fleet = await Fleet.findById(fleetId);
    return {
      ...fleet._doc,
      _id: fleet._doc._id.toString(),
      rigs: user.bind(this, fleet.rigs)
    };
  } catch (err) {
    throw err;
  }
}

const rigs = async rigIds => {
  try {
    console.log(`rigIds: ${rigIds}`)
    const rigs = await Rigs.find({ _id: { $in: rigIds } });
    // console.log(`rigs: ${rigs}`)
    return rigs.map(rig => {
      return {
        ...rig._doc,
        _id: rig._doc._id.toString(),
        // date: new Date(rig._doc.date).toISOString(),
        fleet: user.bind(this, rig.fleet)
      };
    });
  } catch (err) {
    throw err;
  }
};

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return {
        ...event._doc,
        _id: event._doc._id.toString(),
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event.creator)
      };
    });
  } catch (err) {
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await Event.findById(eventId);
    return {
      ...event._doc,
      _id: event._doc._id.toString(),
      creator: user.bind(this, event.creator)
    };
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user._doc._id.toString(),
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  rigs: async () => {
    try {
      const rigs = await Rigs.find();
      return rigs.map(rig => {
        return {
          ...rig._doc,
          _id: rig._doc._id.toString(),
          createdAt: new Date(rig._doc.createdAt).toISOString(),
          updatedAt: new Date(rig._doc.updatedAt).toISOString(),
          fleet: singleFleet.bind(this, rig._doc.fleet)
        }
      });
    } catch (err) {
      throw err;
    }
  },
  fleets: async () => {
    try {
      const fleets = await Fleet.find();
      return fleets.map(fleet => {
        console.log(`rigs: ${fleet._doc.rigs}`)

        return {
          ...fleet._doc,
          _id: fleet._doc._id.toString(),
          createdAt: new Date(fleet._doc.createdAt).toISOString(),
          updatedAt: new Date(fleet._doc.updatedAt).toISOString(),
          rigs: rigs.bind(this, fleet._doc.rigs)
        }
      });
    } catch (err) {
      throw err;
    }
  },
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return {
          ...event._doc,
          _id: event._doc._id.toString(),
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator)
        };
      });
    } catch (err) {
      throw err;
    }
  },
  bookings: async args => {
    try {
      const bookings = await Booking.find();
      console.log(`bookings: ${JSON.stringify(bookings)}`);
      return bookings.map(booking => {
        console.log(`booking: ${JSON.stringify(booking)}`);
        return {
          ...booking._doc,
          _id: booking._doc._id.toString(),
          user: user.bind(this, booking._doc.user),
          event: singleEvent.bind(this, booking._doc.event),
          createdAt: new Date(booking._doc.createdAt).toISOString(),
          updatedAt: new Date(booking._doc.updatedAt).toISOString()
        };
      });
    } catch (err) { }
  },
  createEvent: async args => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: "5c23f65195f5cbfd9ae46c46"
    });
    let createdEvent;

    try {
      const result = await event.save();
      createdEvent = {
        ...result._doc,
        _id: result._doc._id.toString(),
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, result._doc.creator)
      };

      const creator = await User.findById("5c23f65195f5cbfd9ae46c46");
      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdEvents.push(event);

      await creator.save();

      return createdEvent;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }

      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const user = new User({
        email: args.userInput.email,
        password: hashedPassword
      });

      const result = await user.save();
      return {
        ...result._doc,
        password: null,
        _id: result._doc._id.toString()
      };
    } catch (err) {
      throw err;
    }
  },
  bookEvent: async args => {
    const fetchEvent = await Event.findOne({ _id: args.eventId });
    console.log(`fetchEvent: ${JSON.stringify(fetchEvent)}`);
    const booking = new Booking({
      user: "5c23f65195f5cbfd9ae46c46",
      event: fetchEvent
    });

    const result = await booking.save();
    return {
      ...result._doc,
      _id: result._doc._id.toString(),
      user: user.bind(this, booking._doc.user),
      event: singleEvent.bind(this, booking._doc.event),
      createdAt: new Date(result._doc.createdAt).toISOString(),
      updatedAt: new Date(result._doc.updatedAt).toISOString()
    };
  },
  cancelBooking: async args => {
    try {
      // const booking = await Booking.findById(args.bookingId)
      const booking = await Booking.findById(args.bookingId).populate("event");
      const event = {
        ...booking.event._doc,
        _id: booking.event._doc._id.toString(),
        creator: user.bind(this, booking.event._doc.creator)
      };
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
};
