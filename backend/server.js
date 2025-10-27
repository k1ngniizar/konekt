import express from "express"
import cookieParser from "cookie-parser"
import path from "path"
import dotenv from "dotenv"

import { app, server } from "./socket/socket.js"
import connectDB from "./db/connectDB.js"
import authRouter from "./routes/authRoutes.js"
import messageRoute from "./routes/messageRoutes.js"
import userRoute from "./routes/userRoutes.js"

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

dotenv.config()

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRouter)
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("/*splat", (req,res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(PORT, () => {
  connectDB()
  console.log(`Server Running on port ${PORT}`)
})