import { connect } from "mongoose";
const DB_URL = process.env.DB_URL ;

connect(DB_URL)
.then(()=>{
    console.log("Mango db connected")

}).catch((err)=>{
    console.log(err)
})