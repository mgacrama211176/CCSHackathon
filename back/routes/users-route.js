import express from "express";
import {
  addParkers,
  DeleteParkers,
  allparked,
  locateParker,
} from "../controllers/user-controller.js";

const router = express();

//Adding new parker
router.post("/addParker", addParkers);

//Remove parked
router.delete("/deleteParker", DeleteParkers);

//finding all parked users
router.get("/findAll", allparked);

//finding specific parker
router.get("/find/:id", locateParker);

export default router;
