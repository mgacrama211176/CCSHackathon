import express from "express";
import { signup, signIn } from "../controllers/auth-controller.js";

const router = express();

// create User
router.post("/signup", signup);

router.post("/signin", signIn);

export default router;
