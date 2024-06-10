// console.log("server si running")
// console.log("server is not running")
// var a=30
// var b=30
// console.log(a+b)
/////////////////////////////////////
// function abc(){
//     console.log("abc")
// }
// abc()
// const cef=function def(){
//     console.log("def")
// }

// (function gef(){
// console.log("gef")
// })()
// (function(){
//     console.log("This function is called immediately");
// })();
// var add=(a,b)=>{console.log(a+b)}
// add(2,2)
////////////////////
//callback
// function callback(){
//     console.log("callback is called")
// }
// function add(a,b,callback){
//     console.log(a+b)
//     callback()
// }
// add(1,2,callback)
//////////////////////////////
// const os=require('os')
// try{
// const user=os.userInfo()
// console.log(os.userInfo())
// console.log(user.username)
// }
// catch(err){
//     console.log(err)
// }
///////////////////////////////////
// const fs=require("fs")
// fs.appendFile("firstFile","one",()=>{
//     console.log("this is my first file")
// })
///////////////////////////////////////////
// const fs=require("fs")
// fs.writeFile("FileTwo","write",()=>{
//     console.log("this is second file")
// })
///////////////////////////
// const fs=require("fs")
// fs.open("thirdFile","w",()=>{
//     console.log("this is my third file")
// })
//////////////////////////////
// const fs=require("fs")
// fs.unlink("greeting.txt",()=>{
//     console.log("the file has deleted")
// })
///////////////////
// const fs=require("fs")
// fs.rename("firstFile","abc.txt",()=>{
//     console.log("file has renamed")
// })
/////////////////////////////////////
// const fs=require("fs")
// fs.readFileSync("thirdFile",()=>{
//     console.log("file has read")
// })
////////////////////////////////
// lodash-->> used for object manipulation,array soting etc
// const _ = require("lodash");
// let arr=[1,2,3,4]
// let result=_.indexOf(arr,3,0)
// console.log(result)

////////////////////////////////////
// const jsonString='{"name":"abc","age":23}'//json in a string
// const result=JSON.parse(jsonString)
// console.log(result.name)
// console.log(result)
// const jsonObject={name:"abc",age:23}
// const result1=JSON.stringify(jsonObject)
// console.log(result1)
// console.log(typeof JSON)
// console.log(typeof result)
// console.log(typeof result1)

// const result1=JSON.stringify(json)
// console.log(result)
// console.log(result1)
//////////////////////////////////////////////////////
// const fetchData=async()=>{
//     const data=await fetch("https://jsonplaceholder.typicode.com/comments")
//     const json=await data.json()
//     const result=json.map((x)=>{
//         console.log("name",x.name)
//         return x.name
//     })
//     console.log("result",result)
//     // console.log(data)
// }
// fetchData()
//////////////////////////////////////
const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config() //for .env file to get the server understand


const bodyParser = require("body-parser");
const PORT=process.env.PORT || 3000

app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Hello World");
  console.log("the server has started");
});
// app.get('/southindian',function(req,res){
//     var data={name:"idli",size:"10mm"}
//     res.send(data)
//     res.send("yes i can serve this")
// })
// app.post("/items",(req,res)=>{
//   res.send("item data is saved")
//   console.log("data is posted")
// })




// })
const personRoutes=require("./routes/personRoutes.js")
app.use('/person',personRoutes)

const menuRoutes=require("./routes/menuRoutes.js")
app.use('/menuitems',menuRoutes)

app.listen(PORT, () => {
  console.log("server is listening on port 3000");
});
