import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRoute = express.Router()

messageRoute.post("/send/:id", protectRoute,  sendMessage)
messageRoute.get("/:id", protectRoute,  getMessages)

export default messageRoute