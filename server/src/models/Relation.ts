import mongoose, { Schema, model , Model, mongo } from "mongoose";
import { IRelation } from "Interfaces/interfaces.js";

const relationSchema:Schema<IRelation> = new Schema({
    followerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    followingId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
    
},
{
        timestamps:true,
})

export const Relation:Model<IRelation> = model("Relation",relationSchema);