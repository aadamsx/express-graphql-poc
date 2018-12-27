const mongoose = require("mongoose");
const Rigs = require("../../models/rigs");
const Fleet = require("../../models/fleet");
const JSON = require("circular-json");

const rigs = require("./rigs");
const fleets = require("./fleets");

const seedRigs = async () => {
  await Rigs.collection.drop();
  rigs.map(async rig => {
    const fleetId = rig.fleetId;
    const foundFleet = await Fleet.findOne({ fleetId: fleetId })
    if (foundFleet) {
      rig.fleet = foundFleet._id;
      let newRig = new Rigs(rig)
      newRig.save();
    }
  });
}

const seedFleets = async () => {
  await Fleet.collection.drop();
  fleets.map(fleet => {
    let newFleet = new Fleet(fleet)
    newFleet.save();
  });
}

const backfillFleetsWithRigs = async () => {
  localFleets = await Fleet.find();
  localFleets.map(async fleet => {
    const foundRigs = await Rigs.find({ fleet: fleet._id })
    if (foundRigs) {
      // console.log(`fleet: ${JSON.stringify({ ...fleet._doc })}`)
      await Fleet.updateOne({ _id: fleet._id }, { ...fleet._doc, rigs: foundRigs })
    }
  });
}

module.exports = { seedRigs, seedFleets, backfillFleetsWithRigs };

