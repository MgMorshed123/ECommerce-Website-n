import {  hashPassword } from "../Helpers/authHelpers.js";
import userModel from "../Models/userModel.js";
import JWT from 'jsonwebtoken';

import  bcrypt from 'bcrypt'


export const  registerController   =  async( req, res) => {
      try {
         const {name, email , password, phone, address} = req.body;

        // validation

        if(!name){
            return res.send({error : "Name is Required"})
        }
        if(!email){
            return res.send({error : "Email is Required"})
        }
        if(!password){
            return res.send({error : "Password is Required"})
        }
        if(!phone){
            return res.send({error : "Phone is Required"})
        }

        if(!address){
            return res.send({error : "Phone is Required"})
        }


        const existingUser =  await userModel.findOne( {email})


        if(existingUser){
            return  res.status(200).send({
                success : true,
                message : 'Already Registered Please Login '
            })
        }

        
        const hashedPassword = await hashPassword(password)



        const user = await new userModel({name,email,phone, address, password : hashedPassword}).save()



          
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


















