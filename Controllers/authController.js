import {  hashPassword } from "../Helpers/authHelpers.js";
import userModel from "../Models/userModel.js";
import JWT from 'jsonwebtoken';

import  bcrypt from 'bcrypt'


export const  registerController   =  async( req, res) => {
      try {
         const {name, email , password, phone, address, answer } = req.body;

        // validation

        if(!name){
            return res.send({message : "Name is Required"})
        }
        if(!email){
            return res.send({message : "Email is Required"})
        }
        if(!password){
            return res.send({message : "Password is Required"})
        }
        if(!phone){
            return res.send({message : "Phone is Required"})
        }

        if(!address){
            return res.send({message : "Phone is Required"})
        }


        const existingUser =  await userModel.findOne( {email})


        if(existingUser){
            return  res.status(200).send({
                success : false,
                message : 'Already Registered Please Login '
            })
        }

        
        const hashedPassword = await hashPassword(password)

        const user = await new userModel({name,email,phone, address, password : hashedPassword, answer}).save()
        
        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user,
          });
          

      }
 

   

       catch (error) {

        console.log(error)
        res.status(500).send({
            success : false,
            message : 'Error In Registeration',
            error
        }) 

      }




}



export const loginController =   async (req, res) => {
    try {      
         const {email, password} = req.body;
// checking for validation
         if(!email || !password) {
            return res.status(404).send({
                success :false,
                message : "Invalid email or password"
            })
         }
         const user =  await userModel.findOne({email})
 // checking for  user      
         if(!user) {
              return res.status(404).send({
                success : false,
                message :'Email is not registered'
              })
         }
 // checking for  password      
         const match  =  bcrypt.compareSync(password, user.password)
         if(!match){
            return res.status(200).send({
                success : false,
                message : "Invalid Password"
            })
         }
//   adding token 
   const token = await JWT.sign({_id : user._id}, process.env.JWT_SECRET, {
     expiresIn : "7d",
   })

   res.status(200).send({
    success : true,
    message :"login succesfully",
    user : {
        name : user.name,
        email : user.email,
        phone : user.phone,
        address : user.address,
        role : user.role,
    },
    token, 
  })



    } catch (error) {


        console.log(error)
        res.status(500).send({
            success : false,
            message : "Error in login",
            error

        })
    }



}
// test testController


export const  testController = (req,res) => {

  res.send("Protected Route ")

}


export const forgotPasswordController = async (req, res) => {

    try {
      const { email, answer, newPassword } = req.body;

      if (!email) {
        res.status(400).send({ message: "Emai is required" });
      }

      if (!answer) {
        res.status(400).send({ message: "answer is required" });
      }

      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check

      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email Or Answer",
        });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };
  















