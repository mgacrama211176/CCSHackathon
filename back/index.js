import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//ROUTES
import userRoute from "./routes/users-route.js";
import authRoute from "./routes/auth.js";
import spacesRoute from "./routes/spaces.js";
import notificationRoute from "./routes/notification-Route.js";

import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin123@purple.r6pefwf.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/slots", spacesRoute);
app.use("/api/notification", notificationRoute);

app.use((err, request, response, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return response.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`port is listening on ${PORT}`);
  console.log("express connected");
});
