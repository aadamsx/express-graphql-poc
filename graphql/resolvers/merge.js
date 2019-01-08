const Rigs = require("../../models/rigs");
const Fleet = require("../../models/fleet");
const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");

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
      return transformEvent(event);
    });
  } catch (err) {
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await Event.findById(eventId);
    return transformEvent(event);
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

const transformEvent = event => {
  console.log(`event: ${event}`)
  return {
    ...event._doc,
    _id: event._doc._id.toString(),
    date: dateToString(event._doc.date),
    creator: user.bind(this, event.creator)
  };
}

const transformBookings = booking => {
  return {
    ...booking._doc,
    _id: booking._doc._id.toString(),
    user: user.bind(this, booking._doc.user),
    event: singleEvent.bind(this, booking._doc.event),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt)
  };
}

exports.transformBookings = transformBookings;
exports.transformEvent = transformEvent;
// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;
// exports.singleFleet = singleFleet;
// exports.rigs = rigs;