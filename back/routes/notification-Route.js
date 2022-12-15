import express from "express";
import {
  newParkController,
  exitParkController,
  getNotificationController,
} from "../controllers/notification-controller.js";

const router = express();

// create User
router.post("/new", newParkController);

router.post("/exit", exitParkController);

router.get("/getAll", getNotificationController);

export default router;
