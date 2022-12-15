import notificationModel from "../models/notif.js";

//generate all parked users in the system
export const newParkController = async (request, response, next) => {
  const newParker = request.body;
  console.log(newParker);
  try {
    const notification = new notificationModel(newParker);
    await notification.save();
    response.status(200).json(notification);
  } catch (err) {
    next(err);
  }
};
//generate all parked users in the system
export const exitParkController = async (request, response, next) => {
  const newParker = request.body;
  console.log(newParker);
  try {
    const notification = new notificationModel(newParker);
    await notification.save();
    response.status(200).json(notification);
  } catch (err) {
    next(err);
  }
};
//generate all parked users in the system
export const getNotificationController = async (request, response, next) => {
  try {
    const All = await notificationModel.find({}).sort({
      createdAt: -1,
    });
    response.status(200).json(All);
  } catch (err) {
    response.status(200).json(err);
  }
};
