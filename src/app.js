import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials : true
}))

// json jayada naa bheje uska v khyal rhkna hai bhai
app.use (express.json({limit:"20kb"}))

// sometime url bhejegi to +/% beech me laga deta hai uske liye
app.use(express.urlencoded({
    extended: true, limit:"2"
}))


// file or folder store karna chahte hai public assests

app.use(express.static("public"))

app.use(cookieParser());






export default app