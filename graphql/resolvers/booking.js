const Booking = require("../../models/bookings");
const Event = require("../../models/event");
const { transformEvent, transformBookings } = require("./merge");



module.exports = {
  bookings: async args => {
    try {
      const bookings = await Booking.find();
      console.log(`bookings: ${JSON.stringify(bookings)}`);
      return bookings.map(booking => {
        console.log(`booking: ${JSON.stringify(booking)}`);
        return transformBookings(booking);
      });
    } catch (err) { }
  },
  bookEvent: async args => {
    const fetchEvent = await Event.findOne({ _id: args.eventId });
    console.log(`fetchEvent: ${JSON.stringify(fetchEvent)}`);
    const booking = new Booking({
      user: "5c23f65195f5cbfd9ae46c46",
      event: fetchEvent
    });

    const result = await booking.save();
    return transformBookings(result);

  },
  cancelBooking: async args => {
    try {
      // const booking = await Booking.findById(args.bookingId)
      const booking = await Booking.findById(args.bookingId).populate("event");
      const event = transformEvent(booking._doc.event)
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
};
