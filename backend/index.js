import express from "express";
import dotenv from "dotenv"; 
dotenv.config(); 
import  connectDB from "./Models/db.js"; 
import TaskRouter from "./Routes/TaskRouter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000  
connectDB();
app.use(cors());
app.use(express.json()); // Built-in JSON middleware
app.use(express.urlencoded({ extended: false })); // Handle form data

app.get("/", (req, res) => {
    res.send(`hello from server  ${PORT}`);
})

app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
