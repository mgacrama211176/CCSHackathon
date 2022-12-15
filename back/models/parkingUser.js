import mongoose from "mongoose";

const ParkerSchema = new mongoose.Schema(
  {
    parkerPlateNumber: {
      type: String,
      default: "",
    },
    parkingNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const ParkingUser = mongoose.model("Parker", ParkerSchema);

export default ParkingUser;
