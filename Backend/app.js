import express from 'express'
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

// routes

import userRouter from "./routes/user.routes.js"
import schoolRouter from "./routes/school.routes.js"
import departmentRouter from "./routes/department.routes.js"
import levelRouter from "./routes/level.routes.js"
import bookRouter from "./routes/book.routes.js"
import { errorHandler } from "./middlewares/error.middleware.js"


app.use("/api/v1/users", userRouter)
app.use("/api/v1/schools", schoolRouter)
app.use("/api/v1/departments", departmentRouter)
app.use("/api/v1/levels", levelRouter)
app.use("/api/v1/books", bookRouter)
app.use(errorHandler)

export { app }