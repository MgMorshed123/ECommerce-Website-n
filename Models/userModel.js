

import mongoose  from "mongoose";


const userSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
        
          },
          email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true, // Ensure email uniqueness is case-insensitive
          },

        password : {
            type : String,
            required: true,
        },

        phone : {
            type : String,
            required: true,
        },

        address : {
            type : String,
            required: true,
        },
        answer : {
            type : String,
            required: true,
        },

        role : {
            type : String,
           default : 0,
        },

    },
          { timestamps : true}

)


export default mongoose.model("users", userSchema)