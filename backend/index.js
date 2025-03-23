const  express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db")
const PORT  = process.env.PORT ;
const  TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require("body-parser");
const cors = require('cors');
app.get("/",(req,res)=>{
res.send("hello from server 8000");
})
app.use(cors());
app.use(bodyParser.json());
app.use("/tasks",TaskRouter)


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})