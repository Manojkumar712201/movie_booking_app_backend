// user-routes,js
import {
    deleteUser,
    getAllUsers,
    getBookingofUser,
    getUserById,
    login,
    signup,
    updateUser,
  } from "../controllers/user-controller.js";
  import express from "express";
  
  const userRouter = express.Router();
  
  userRouter.get("/", getAllUsers);
  userRouter.get("/:id", getUserById);
  userRouter.post("/signup", signup);
  userRouter.post("/login", login);
  userRouter.put("/:id", updateUser);
  userRouter.delete("/:id", deleteUser);
  userRouter.get("/bookings/:id", getBookingofUser);
  
  export default userRouter;