import mongoose from "mongoose";

const SpaceSchema = new mongoose.Schema(
  {
    parkerId: {
      type: { String },
    },

    parkingNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const ParkSpace = mongoose.model("Parker", SpaceSchema);

export default ParkSpace;
