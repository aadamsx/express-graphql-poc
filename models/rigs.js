const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const rigsSchema = new Schema(
  {
    title: {
      type: String
    },
    operator: {
      type: String
    },
    manager: {
      type: String
    },
    status: {
      type: String
    },
    kpis: [{
      _id: false,
      area: String,
      indicator: Number,
      status: String
    }],
    fleet: {
      type: Schema.Types.ObjectId,
      ref: "Fleet"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Rigs", rigsSchema);