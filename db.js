const mongoose=require("mongoose")
require('dotenv').config() //for .env file to get the server understand
//define mongodb connection URL
// const mongoURL="mongodb://localhost:27017/hotels";
// const mongoURL="mongodb+srv://shikhasharma0426:Shikha2024@cluster0.jxomx5z.mongodb.net/hotels"
// const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL

//setup mongodb connection
mongoose.connect(mongoURL)

//get the default connection
//mongoose mainatins a default connection object to represent mongodb connection
const db=mongoose.connection
db.on("connected",()=>{
    console.log("mongodb is connected")
})
db.on("error",(err)=>{
    console.log("mongodb is showing err",err)
})
db.on('disconnected',()=>{
    console.log("mongodb is disconnetd")
})
module.exports=db;