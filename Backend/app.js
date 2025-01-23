import express from 'express'
import { errorHandler } from ".+"

const app = express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// routes

import userRouter from "./routes/user.routes.js"


app.use("/api/v1/users", userRouter)
app.use(errorHandler)

export { app }