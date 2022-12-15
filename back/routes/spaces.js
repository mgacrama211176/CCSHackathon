import express from "express";
import {
  addSlot,
  viewController,
  UpdateController,
} from "../controllers/spaces-controller.js";

const router = express();

//Adding new parker
router.post("/addSlot", addSlot);

//View all slots
router.get("/viewSlots", viewController);

//Update Slots
router.put("/updateSlot/:id", UpdateController);

export default router;
