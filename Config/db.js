

import mongoose from "mongoose";
import colors from 'colors';



const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongoruri)
        console.log(`Connected To Mongodb database ${conn.connection.host}`.bgMagenta.white) 
    } catch (error) {
        console.log(`Error in mongoDb ${error}`.bgRed.white)
        
    }
}

export default connectDb;
