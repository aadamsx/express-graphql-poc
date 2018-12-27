const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const fleetSchema = new Schema(
  {
    fleetId: { type: Number },
    title: { type: String },
    rigs: [{
      type: Schema.Types.ObjectId,
      ref: "Rig"
    }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Fleet", fleetSchema);