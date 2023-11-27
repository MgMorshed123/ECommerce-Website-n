import { hashPassword } from "../Helpers/authHelpers.js";
import userModel from "../Models/userModel.js";
import JWT from 'jsonwebtoken';



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




         if(!email || !password) {

            return res.status(404).send({
                success :false,
                message : "Invalid email or password"

            })
         }


         


    } catch (error) {


        console.log(error)
        res.status(500).send({
            success : false,
            message : "Error in login",
            error

        })
    }



}




















