import mongoose from "mongoose";

const SpaceSchema = new mongoose.Schema(
  {
    parkerPlateNumber: {
      type: String,
      default: null,
    },

    parkingNumber: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

const ParkSpace = mongoose.model("Space", SpaceSchema);

export default ParkSpace;
