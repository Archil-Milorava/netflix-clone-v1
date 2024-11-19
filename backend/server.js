import 'dotenv/config'
import express from "express";
import authRouter from "./routes/auth.route.js";
import connectDB from './DB/connectDB.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/auth", authRouter);


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
    connectDB()
})
