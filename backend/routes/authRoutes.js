import express from "express"
import { login, logout, signin } from "../controllers/authControllers.js"

const authRouter = express.Router()

authRouter.post("/signup", signin)

authRouter.post("/login", login)

authRouter.post("/logout", logout)

export default authRouter