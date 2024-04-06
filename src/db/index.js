import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";



const conneDB = async () => {
    try {

       const connectioninstance=  await mongoose.connect(
        `${process.env.MONGODB_URI} / ${DB_NAME}`
        )

        console.log(`Mongodb Connection !! DB_HOST Successfully done
        ${connectioninstance.connection.host}`);
        
    } catch (error) {

        console.log("MongoDB connection error", error);
        process.exit(1);
        
    }
}


export default conneDB;