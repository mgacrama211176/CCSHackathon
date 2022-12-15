import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    parkerPlateNumber: {
      type: String,
      default: "",
    },
    parkingNumber: {
      type: Number,
      default: 0,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const notificationModel = mongoose.model("Notifications", notificationSchema);

export default notificationModel;
