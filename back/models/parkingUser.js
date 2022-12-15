import mongoose from "mongoose";

const ParkerSchema = new mongoose.Schema(
  {
    driverFirstName: {
      type: String,
      default: "",
    },

    driverLastName: {
      type: String,
      default: "",
    },

    carModel: {
      type: String,
      default: "",
    },

    carLicense: {
      type: String,
      default: "",
    },

    carColor: {
      type: String,
      default: "",
    },

    plateNumber: {
      type: String,
      default: "",
    },

    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
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
