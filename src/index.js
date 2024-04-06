/* This is the first approch that is nice but not industry standard approch

import mongoose from "mongoose";
import { DB_NAME } from "./constant";

import  express  from "express";

const app=expressxpress()

;(async () => {

  try {

    await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)

    //
    app.on("errror", (error)=>  {
      console.log("express not started",error)
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is listen at ${process.env.PORT}`)
    })
    
  } catch (error) {
    console.error("DB not connected",error)
    throw error
    
  }
 
})()


*/





import dotenv from "dotenv"
import conneDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path:'./env'
})
conneDB()
.then(() => {

  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running on this ${process.env.PORT}`)
  })
  
})
.catch((error)=> {
  console.log("Mongo db not succefully handed ",error)

})





