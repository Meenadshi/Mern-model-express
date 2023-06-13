const express = require('express');
const router = express.Router();
const employeeModel=require('../models/employeesModel')

const getAllEmployees=async(req,res)=>{
    try{
     const employees = await employeeModel.find();
    res.status(200).json(employees);
   }
   catch(error){
     // console.log(error);
     res.status(500).json({message:error.message})
   }
   }

   const postEmployees =async(req,res)=>{
   
    const newEmployee = new employeeModel({
      name:req.body.name,
      service:req.body.service,
      joiningDate:req.body.joiningDate,
      
    })
    try{
      const employee =await newEmployee.save();
      res.status(201).json(employee);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
  }
 const upadteEmployees =async(req,res)=>{
    if(req.body.name!=null){
      res.employee.name=req.body.name;
    }
    if(req.body.service!=null){
      res.employee.service=req.body.service
    }
    try{
      const updateEmployee=await res.employee.save();
      res.status(201).json(updateEmployee);
    }
    catch(error){
      res.send(400).json({message:error.message})
    }
  }
  
  const deleteEmployee=async(req,res)=>{
    try{
     
      await res.employee.deleteOne();
      res.json({message:`Deleted user ${res.employee.name}`})
    }
    catch(error){
      res.status(400).json({message:error.message})
    }
  }
  
 const getAnEmployee=(req,res)=>{
    // res.send(`Displaying Student details With Id ${req.params.id}`)
    res.status(201).json(res.employee);
  }
  
  
  async function getEmployee(req,res,next){
    let employee
    try{
      employee=await employeesModel.findById(req.params.id)
      if(employee==null){
        return res.status(404).json({message:`cannot find user with id ${req.params.id}`})
      }
    }
    catch(error){
      return res.status(500).json({message:error.message})
    }
    res.employee=employee
    next();
  }
  module.exports={getAllEmployees,getAnEmployee,upadteEmployees,postEmployees,deleteEmployee,getEmployee};