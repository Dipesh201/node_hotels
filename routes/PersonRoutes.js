const express = require('express');
const router = express.Router();
const Person = require("../models/person");

//  create person data 
router.post("/person", async(req,res)=>{
    const body = req.body;
    const newPerson = await Person.create(body);
    res.status(201).json({ message: "success full data post ",newPerson})
});


// get all person data 
router.get("/person", async(req, res)=>{
    const allpersion = await Person.find();
    res.status(200).json({ message: "success full get data",allpersion})
    
    });

     
    router.get('/person/:workTypes', async(req,res)=>{
        try {
          const workTypes = req.params.workTypes;
          if(workTypes == 'chef'||workTypes == 'manager'|| workTypes == 'waiter'){
              
             const response = await Person.find({work: workTypes})
             console.log(response);
              res.status(200).json(response);
      
          } 
          else{
              res.status(404).json({message: 'Work type not'})
          }
        } catch (error) {
          res.status(500).json({message:"server error"})
        }
          
      })


      router.put('/person/:id', async(req,res)=>{
       try {
        const personId = req.params.id;
        const body = req.body;
        const updateperson = await Person.findByIdAndUpdate(personId, body);
        res.status(200).json({massage:"success",})
       } catch (error) {
        
        console.log(error);
       }

      })

      router.delete('/person/:id', async(req,res)=>{
      try {
        const id = req.params.id;
        const deleteperson = await Person.findByIdAndDelete(id);
        if(!deleteperson) {
        res.status(404).json({message: "no such person"})
        }
        res.status(200).json({message:"delete", deleteperson})
      } catch (error) {
        
      }

        
      })

module.exports = router ;