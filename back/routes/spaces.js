import express from "express";
import { addSlot, viewController } from "../controllers/spaces-controller.js";

const router = express();

//Adding new parker
router.post("/addSlot", addSlot);

//View all slots
router.get("/viewSlots", viewController);

export default router;
