const express=require('express')
const router=express.Router()
const MenuItem = require("./../models/MenuItem.js");

router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("data fethced");
      res.status(200).json(data);
    } catch (err) {
      console.log("error", err);
      res.status(500).json({ err: "Internal server err" });
    }
  });

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenuItem = new MenuItem(data);
      const response = await newMenuItem.save();
      console.log("MenuItem data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log("error", err);
      res.status(500).json("Internal server error");
    }
  });

  router.get("/:tasteType", async (req, res) => {
    try {
      const tasteType=req.params.tasteType;
      if(tasteType=="sweet"||tasteType=="sour"||tasteType=="spicy"){
        const response=await MenuItem.find({taste:tasteType});
        console.log("response fetched")
        res.status(200).json(response)
      }else{
        console.log("Invalid taste type")
        res.status(404).json({error:'Invalid taste Type'})
      }
  
    } catch (err) {
      console.log("error", err);
      res.status(500).json({ err: "Internal server err" });
    }
  });

//chnages through git
//change 2.0
//change 3.0
  module.exports=router