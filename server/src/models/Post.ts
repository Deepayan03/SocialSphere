import mongoose , { model,Schema , Model } from "mongoose";
import { IPostContent, IPost } from "Interfaces/interfaces.js";


const postContentSchema:Schema<IPostContent> = new Schema ({
    media : [
        {
            public_id : String,
            secure_url : String
        },
    ] ,
    text : String
});

const postSchema : Schema<IPost> = new Schema({
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    caption : {
        type : String
    },
    contentType : {
        type : String,
        enum : ["TEXT","MEDIA"]
    },
    postContent : {
        type : postContentSchema,
        required : [ true , "you can't make an empty post."]
    },    
    visibility : {
        type : Boolean,
        default : true
    }

},{ timestamps:true })

export const Post : Model<IPost> = model("Post",postSchema);