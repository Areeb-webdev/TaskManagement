import express from "express";
const app = express();
require("dotenv").config();
import "./Models/db";
const PORT  = process.env.PORT ;
import TaskRouter from './Routes/TaskRouter';
import { json } from "body-parser";
import cors from 'cors';
app.get("/",(req,res)=>{
res.send("hello from server 8000");
})
app.use(cors());
app.use(json());
app.use("/tasks",TaskRouter)


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})