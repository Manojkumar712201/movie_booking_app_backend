import express from "express";
import {
  deleteBooking,
  getBookingById,
  newBooking,
} from "../controllers/booking-controller.js";

const bookingRoutes = express.Router();

bookingRoutes.post("/", newBooking);
bookingRoutes.get("/:id", getBookingById);
bookingRoutes.delete("/:id", deleteBooking);

export default bookingRoutes;
