import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  getAllUser,
  resetPassword,
  retrieveUsers,
  addParkers,
  DeleteParkers,
} from "../controllers/user-controller.js";

const router = express();

//Adding new parker
router.post("/addParker", addParkers);

//Remove parked
router.delete("/deleteParker", DeleteParkers);

//find all users
router.get("/find/All", retrieveUsers);

//For update
router.put("/:id", update);

//For delete
router.delete("/delete/:id", deleteUser);

//For get user
router.get("/find/:id", getUser);

//For getting user using email for forgot password
router.put("/find/email/:email", getAllUser);

//After getting the password verify if token and expire is found on database
router.put("/find/email/reset/:resetPasswordToken", resetPassword);

//For subscribe
router.put("/sub/:currentUserId/:currentChannelId", subscribe);

export default router;
