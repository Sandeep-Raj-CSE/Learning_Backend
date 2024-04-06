import moongoose, { Schema } from "mongoose";


const userSchema= new Schema(
    {
        username:{
            type:String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
        },
        email :{
            type:String,
            required: true,
            unique:true,
           // lowercase:true,
            trim:true,
            index:true,
        },
         avatar:{
            type:String,
            required: true,
           
        },
        coverimage:{
            type:String,
            
        },
        watchHistory:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        password:{
            type:String,
            required:[true,"Hey plzz password"]
        },
        refreshToken:{
            type:String
        }
       





},{
timestamps:true
}
)


export const User=moongoose.model("User",userSchema)