import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import connectDB from "./db/connectDB.js"

import authRouter from "./routes/authRoutes.js"
import messageRoute from "./routes/messageRoutes.js"
import userRoute from "./routes/userRoutes.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("hello world")
})

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)

app.listen(PORT, () => {
  connectDB()
  console.log(`Server Running on port ${PORT}`)
})