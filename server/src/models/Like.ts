import mongoose, { Schema,model,Model } from "mongoose";
import { Ilike } from "Interfaces/interfaces.js";

const likeSchema:Schema<Ilike> = new Schema ({
    likedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
    },
    likedAt : {
        type : Date,
        default : Date.now(),
    }
})

export  const Like:Model<Ilike> = model("Like",likeSchema);