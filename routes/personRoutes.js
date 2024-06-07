const express = require("express");
const router = express.Router();
const Person = require("./../models/Person.js");

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log("error fetching data", err);
    res.status(500).json({ error: "Internal Server error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //extract work type from URL parameter
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      console.log("Invalid Work Type");
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/", async (req, res) => {
  //   const data=req.body //data coming and storing in req.body
  //   const newPerson=new Person()//create a new person object using mongoose model
  //   newPerson.name=data.name;
  //   newPerson.age=data.age;
  //   newPerson.work= data.work,
  //   newPerson.mobile=data.mobile

  // newPerson.save((error,res)=>{
  //   if(error){
  //     console.log("Error adding new person",error)
  //     res.status(500).json({error:"Internal server error"})
  //   }
  //   else{
  //     console.log("data saved sucessfully")
  //     res.status(200).json({"Successfully added person"})
  //   }
  try {
    const data = req.body;

    console.log("data upper---> ", data);
    const newPerson = new Person(data);
    console.log("data lower---> ", newPerson);
    const response = await newPerson.save(); //wait until the data is saved
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server error" });
  }

  
  //get method to get the perosn
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the URL parameter
    const updatedPersonData = req.body; //updated data for the person
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //return updated document
        runValidators: true, //run mongoose validator
      }
    );
    // if (!updatedPerson) {
    //   return res.status(404).json({ error: "person not found" });
    // }

    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id",async(req,res)=>{
  try{
    const personId=req.params.id;
    const response=await Person.findByIdAndDelete(personId)
    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("data deleted");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err)
    res.status(500).json({error:"Internal Server Error"})
  }

})

module.exports = router;
