import {  Response , NextFunction } from "express"
import { catchAsyncError } from "middlewares/catchAsyncError.js"
import { IPostContent, IcreatePostRequest, IparticularPost , Imediacontent } from "Interfaces/interfaces.js"
import errorHandler from "../utils/ErrorHandler.js";
import  getDataUri  from "../utils/dataUri.js"
import cloudinary from "cloudinary";
import { Post } from "models/Post.js";

export const createPost = catchAsyncError(
    async (req:IcreatePostRequest,res:Response,next:NextFunction)=>{
        
        let postContent:null | IPostContent = null;

        const file = req.file;
        const text = req.body.text;
        const userId = req.user._id;
        const contentType = file?"MEDIA":"TEXT";
        const caption = req.body.caption?req.body.caption:"";

        if(!file && !text){
            return next(new errorHandler("Can not post an empty Post, please",400));
        }

        try {
            if (file) {
                const fileUri: string = getDataUri(file);
                const myCloud = await cloudinary.v2.uploader.upload(fileUri, { folder: userId });   
                postContent = { media: { secure_url: myCloud.secure_url, public_id: myCloud.public_id } };
                   
            }else{
                postContent = {text : text};
            }
            const post = await Post.create({
                postedBy : userId,
                caption,
                contentType,
                postContent
            });
            
            await post.save();
            
            res.status(200).json({
                success: true,
                message: "Post Uploaded Successfully",
                data : post,
            });
        } catch (error) {
            console.log(error.message);
            next(error);
        }
                
        }
)

export const updatePost = catchAsyncError(
    async (req:IparticularPost,res:Response,next:NextFunction)=>{
        
        const { id } = req.params;
        console.log(id);
        
        const text = req.body.text?req.body.text:null;
        const caption = req.body.caption?req.body.caption:"";

        try {

            const post = await Post.findById(id);
            
            if(text){
                post.postContent= {text:text};  
            }

            if(caption.length){
                post.caption = caption;
            }
            
            await post.save();
            const updatedPost = await Post.findById(id);
            
            res.status(200).json({
                success: true,
                message: "Post Updated Successfully",
                data : updatedPost,
            });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
                
        }
)

export const deleteParticularPost = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{
        const { id } = req.params;

        try {
            const post = await Post.findById(id);

            if(post.contentType == "MEDIA"){
                const mediaContent = post.postContent as Imediacontent;
                const public_id = mediaContent.media.public_id;
                await cloudinary.v2.uploader.destroy(public_id);   
         
            }

            await Post.findByIdAndDelete(id);
            
            res.status(200).json({
                success: true,
                message: "Post deleted Successfully",
                data : post,
            });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)

export const deleteAllUserPosts = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{
        
        const userId = req.user._id;

        try {

            await cloudinary.v2.api.delete_resources_by_prefix(`${userId}/`);

            await Post.deleteMany({postedBy:userId});
            
            res.status(200).json({
                success: true,
                message: "all user Post deleted Successfully",
            });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)

export const getParticularUserPosts = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{

        const { id } = req.params;

        try {
            const posts = await Post.find({postedBy:id}).sort({ createdAt: -1 });
            
            res.status(200).json({
                success: true,
                message: "All posts fetched Successfully",
                data : posts,
            });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)

export const getUserPosts = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{

        const userId = req.user._id;

        try {
            const posts = await Post.find({postedBy:userId}).sort({ createdAt: -1 });
            
            res.status(200).json({
                success: true,
                message: "All user posts fetched Successfully",
                data : posts,
            });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)

