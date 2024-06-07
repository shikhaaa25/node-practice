const mongoose=require("mongoose")

//define mongodb connection URL
const mongoURL="mongodb://localhost:27017/hotels"

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