const Rigs = require("../../models/rigs");
const { dateToString } = require("../../helpers/date");

module.exports = {
  rigs: async () => {
    try {
      const rigs = await Rigs.find();
      return rigs.map(rig => {
        return {
          ...rig._doc,
          _id: rig._doc._id.toString(),
          createdAt: dateToString(rig._doc.createdAt),
          updatedAt: dateToString(rig._doc.updatedAt),
          fleet: singleFleet.bind(this, rig._doc.fleet)
        }
      });
    } catch (err) {
      throw err;
    }
  }
};
