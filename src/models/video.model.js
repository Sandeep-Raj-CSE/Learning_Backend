import mongoose, { Schema } from "mongoose"
//import mongoose {Schema}

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required:true,


        },
        thumbnail:{

            type: String,
            required:true,

        },
        title:{
            type: String,
            required:true,
        },
        description:{
            type: String,
            required:true,
        },
        duration:{
            type: Number,
            required:true

        
        },
        views:{

            type:Number,
            default:true

        },
        isPublished:{
            type:Boolean,
            default:true

        }

    },{
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video", videoSchema)