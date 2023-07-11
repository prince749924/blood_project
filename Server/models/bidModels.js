const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema(
  {
    Fname: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
     
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bids", bidSchema);
