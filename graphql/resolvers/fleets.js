const Fleet = require("../../models/fleet");
const { dateToString } = require("../../helpers/date");

module.exports = {
  fleets: async () => {
    try {
      const fleets = await Fleet.find();
      return fleets.map(fleet => {
        console.log(`rigs: ${fleet._doc.rigs}`)

        return {
          ...fleet._doc,
          _id: fleet._doc._id.toString(),
          createdAt: dateToString(fleet._doc.createdAt),
          updatedAt: dateToString(fleet._doc.updatedAt),
          rigs: rigs.bind(this, fleet._doc.rigs)
        }
      });
    } catch (err) {
      throw err;
    }
  }
};
