import ParkSpace from "../models/parkSpace.js";

//Adding of parking User
export const addSlot = async (request, response, next) => {
  const parkingSlot = request.body;
  console.log(parkingSlot);
  try {
    const newSlot = new ParkSpace(parkingSlot);
    await newSlot.save();
    response.status(200).json(newSlot);
  } catch (err) {
    next(err);
  }
};

//Viewing all slots
export const viewController = async (request, response, next) => {
  const AllSlots = await ParkSpace.find({});
  response.status(200).json(AllSlots);
};

//Removing of parking User
export const DeleteParkers = async (request, response, next) => {
  const removeParker = request.body.parkingNumber;
  console.log(removeParker);
  try {
    const findParkSLot = await ParkingUser.findOne({
      parkingNumber: removeParker,
    });
    const parkedId = findParkSLot._id;
    const deleteParker = await ParkingUser.findByIdAndDelete(parkedId);
    response.status(200).json(deleteParker);
  } catch (err) {
    response.status(500).json(`User Not found`);
  }
};

//generate all parked users in the system
export const allparked = async (request, response, next) => {
  try {
    const All = await ParkingUser.find({});
    response.status(200).json(All);
  } catch (err) {
    response.status(200).json(err);
  }
};
