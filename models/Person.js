const mongoose=require("mongoose")

//define the person schema
const personSchema=new mongoose.Schema(
 {
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        // required:true
    },
    work:{
        type:String,
        // required:true,
        enum:["waiter","manager","chef"]
    },
    mobile:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
        // unique:true
    },
    address:{
        type:String,
        // required:true
    },
    salary:{
        type:Number,
        // required:true
    }
 }
 )
 const Person=mongoose.model("Person",personSchema)
 module.exports=Person