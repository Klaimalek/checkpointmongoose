const express=require('express')
const route=express.Router()
const Person= require('../models/person')
route.post('/addPerson',async(req,res)=>{
    const {nom,age,favoriteFoods}=req.body
   try{
       const newPerson= new Person({
           nom,
           age, 
           favoriteFoods,
       })
       const contact = await newPerson.save()
       res.send({msg:"person is adding avec succés"})
   }
   catch(err){console.log(err)}
})
module.exports=route