import { createError } from "../error.js";
import User from "../models/parkingUser.js";
import ParkingUser from "../models/parkingUser.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

//Adding of parking User
export const addParkers = async (request, response, next) => {
  const newParker = request.body;
  console.log(newParker);
  try {
    const user = new User(newParker);
    await user.save();
    response.status(200).json(user);
  } catch (err) {
    next(err);
  }
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

//Specific Parker Find
export const locateParker = async (request, response, next) => {
  try {
    const located = await ParkingUser.findById(request.params.id);
    response.status(200).json(located);
  } catch (err) {
    next(err);
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
