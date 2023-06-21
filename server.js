import express from "express"
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import recordsRouter from "./routes/records_router.js"

dotenv.config();

const app = express()

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Home page
app.get("/", (req, res)=>{
    res.send("Home Page")
})

// Routes
app.use("/api/records", recordsRouter)

// Global error handler 
app.use((err, req,res, next)=>{
res.status(err.status || 500)
.json({
    errorMessage: err.message
})
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () =>
    console.log(`app is listening at port ${PORT}`)
    )
  )
  .catch((error) => console.log(error));




