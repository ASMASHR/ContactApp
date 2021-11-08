const express=require('express')
const router=express.Router()
const ContactList=require('../Models/ContactList')
// get all users
router.get('/AllUsers',(req,res)=>{
    ContactList.find()
    .then (users=>res.send({users}))
    .catch(err=>{console.log(err)})
})
// ADD A NEW USER TO THE DATABASE 
router.post('/AddUser',(req,res)=>{
  
        let {firstName,lastName,phoneNumber,email}=req.body
        let person= new ContactList({firstName,lastName,phoneNumber,email})
        res.json(person)
    person.save()
    .then (user=>res.send({"we add": user}))
    .catch(err=>{console.log(err)})
    
})
//  EDIT A USER BY ID 
router.put('/EditUser/:_id',(req,res)=>{
    let {_id}=req.params
    let {firstName,lastName,phoneNumber,email}=req.body
    ContactList.findByIdAndUpdate({_id},{$set:{firstName,lastName,phoneNumber,email}})
    .then (user=>res.send({"we update": user}))
    .catch(err=>{console.log(err)})
})
// REMOVE A USER BY ID 
router.delete('/DeleteUser/:_id',(req,res)=>{
     let {_id}=req.params
     ContactList.findByIdAndDelete({_id})
     .then (user=>res.send({"we delete": user}))
    .catch(err=>{console.log(err)})
})
module.exports=router