import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSidebar } from "../controllers/userController.js";

const userRoute = express.Router()

userRoute.get("/", protectRoute, getUserForSidebar)

export default userRoute