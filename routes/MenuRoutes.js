const MenuItem = require("../models/MenuItem");
const express = require("express");
const  router = express.Router();




    //  create menu data 
    router.post("/",async(req,res)=>{
        const data = await MenuItem.create(req.body)
        res.status(201).json({message: "success create data", data})
        })
    
    
    
        //  all menu items
    router.get("/",async(req,res)=>{
        try {
           const allmenu = await MenuItem.find();
    
        res.send({ message:"success ", allmenu})  
           
        } catch (error) {
           
        }
    })


    router.get('/:taste', async (req, res) => {
        try {
            const tasteType  = req.params.taste;

            if(tasteType == 'sweet'||tasteType == 'spicy'||tasteType == 'sour'){

                const menuItem = await MenuItem.find({taste: tasteType})

                res.status(200).json({message: "success",menuItem})
            }
            else{
                res.status(404).json({message:"not found"})
            }
            
        } catch (error) {
            
        }
    })
    
   



      module.exports = router;

