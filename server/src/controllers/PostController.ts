import {  Response , NextFunction } from "express"
import { catchAsyncError } from "middlewares/catchAsyncError.js"
import { IPostContent,
        IcreatePostRequest, 
        IparticularPost , 
        Imediacontent 
       } from "Interfaces/interfaces.js"
import errorHandler from "../utils/ErrorHandler.js";
import  getDataUri  from "../utils/dataUri.js"
import cloudinary from "cloudinary";
import { Post } from "models/Post.js";
import { IPost } from "Interfaces/interfaces.js";
import mongoose from "mongoose";
import { Relation } from "models/Relation.js";


// creating post
export const createPost = catchAsyncError(
    async (req:IcreatePostRequest,res:Response,next:NextFunction)=>{
        
        let postContent:null | IPostContent = null;
        const files = req.files;
        const text = req.body.text;
        const userId = req.user._id;
        const contentType = files.length?"MEDIA":"TEXT";
        const caption = req.body.caption?req.body.caption:"";

        // return error if file and text both not found
        if(!files.length && !text){
            return next(new errorHandler("Can not post an empty Post, please",400));
        }

        // return error if there are more than three files
        if(files.length && files.length > 3){
            return next(new errorHandler("please upload less than 3 files",400));
        }

        try {
        
            if (files.length) {

                const fileContentArray : IPostContent | any = [];

                const manageFile = async()=>{

                     for( let file of files){
                        const fileUri: string = getDataUri(file);
                        const myCloud : cloudinary.UploadApiResponse = await cloudinary.v2.uploader.upload(fileUri, { folder: userId });   
                        fileContentArray.push({ secure_url: myCloud.secure_url, public_id: myCloud.public_id });
                    }
                }

                await manageFile();
                postContent = {media : fileContentArray};
                
            }else{
                postContent = {text : text};
            }

            const post : IPost = await Post.create({
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
            console.log("errror : ",error.message);
            next(error);
        }
                
    }
)

// update post
export const updatePost = catchAsyncError(
    async (req:IparticularPost,res:Response,next:NextFunction)=>{
        
        const { id } = req.params;
        const text = req.body.text?req.body.text:null;
        const caption = req.body.caption?req.body.caption:"";

        try {

            const post :IPost = await Post.findById(id);

            if(post.contentType != "MEDIA"){
                if(text){
                    post.postContent= {text:text};  
                }
            }
            
            if(caption.length){
                post.caption = caption;
            }
            
            await post.save();
            const updatedPost:IPost = await Post.findById(id);
            
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

// delete particular post using post Id 
export const deleteParticularPost = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{

        const { id } = req.params;

        try {
            const post:IPost = await Post.findById(id);

            if(post.contentType == "MEDIA"){

                const destroyFileFromCloudinary = async ()=>{

                    const mediaContents:IPostContent  = post.postContent as Imediacontent;
                    const contents = mediaContents.media;
                    for ( const content of contents){
                        await cloudinary.v2.uploader.destroy(content.public_id);
                    }

                }

                 await destroyFileFromCloudinary();
         
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

// delete all post of a login user
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

// fetch all post of a particular user  with posted user partial details 
export const getParticularUserPosts = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{

        const { id } = req.params;
        const userId = req.user._id;

        try {

            const posts:IPost[] = await Post.aggregate(
                [
                   {
                        $match:{
                            postedBy:new mongoose.Types.ObjectId(id),
                        },
                   },
                   {
                        $lookup:{
                            from : "likes",
                            localField : "_id",
                            foreignField:"postId",
                            as : "likes"
                        }
                   },
                   {
                        $lookup:{
                            from : "users",
                            localField : "postedBy",
                            foreignField : "_id",
                            as : "user"
                        }
                   },
                   {
                        $addFields : {
                            userDetails : {
                                $arrayElemAt : [
                                    {
                                        $map : {
                                            input : "$user",
                                            as : "user",
                                            in : {
                                                _id : "$$user._id",
                                                avatar : "$$user.avatar",
                                                name : "$$user.name",
                                            }
                                        }
                                    }
                                    ,0
                                ]
                            },
                            totalLikes : {$size : "$likes"},
                            isLiked : {
                                $cond : {
                                    if : {
                                        $in : [new mongoose.Types.ObjectId(userId),"$likes.likedBy"]
                                    },
                                    then : true,
                                    else : false
                                }
                            }
                        }
                   },
                   {
                        $project : {
                            _id : 1,
                            postedBy: 1,
                            caption: 1,
                            contentType: 1,
                            postContent: 1,
                            visibility: 1,
                            totalLikes : 1,
                            isLiked : 1,
                            userDetails : 1,

                        }
                   },
                   {
                        $sort : { createdAt : -1}
                   },
                ]
            )
                                  
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

// fetch login user all post with posted user partial details
export const getUserPosts = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{

        const userId = req.user._id;

        try {

             const posts:IPost[] = await Post.aggregate([
                {
                    $match: {
                        postedBy: new mongoose.Types.ObjectId(userId),
                    }
                },
                {
                    $lookup: {
                        from: "likes",
                        localField: "_id",
                        foreignField: "postId",
                        as: "likes",
                    }
                },
                {
                    $lookup:{
                        from : "users",
                        localField : "postedBy",
                        foreignField : "_id",
                        as : "user"
                    }
                },
                {
                    $addFields : {
                        userDetails : {
                            $arrayElemAt : [
                                {
                                    $map : {
                                        input : "$user",
                                        as : "user",
                                        in : {
                                            _id : "$$user._id",
                                            avatar : "$$user.avatar",
                                            name : "$$user.name",
                                        }
                                    }
                                }
                                ,0
                            ]
                            },
                        totalLikes : {
                                        $size : "$likes",
                                     },
                        isLiked : {
                                    $cond : {
                                                if : {$in:[new mongoose.Types.ObjectId(userId),"$likes.likedBy"]},
                                                then : true,
                                                else : false
                                            }
                                  }             
                    }
                },
                {
                    $project: {
                        _id: 1,
                        postedBy: 1,
                        caption: 1,
                        contentType: 1,
                        postContent: 1,
                        visibility: 1,
                        totalLikes : 1,
                        isLiked : 1,
                        userDetails:1,
                    }
                },
                {
                    $sort: { createdAt: -1 }
                },
            ]);
            
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

// fetch all following posts with posted user partial details
export const getAllFollowingUsersPost = catchAsyncError(
    async(req:IparticularPost,res:Response,next:NextFunction)=>{

        const userId = req.user._id;

        try {

             const posts:IPost[] = await Relation.aggregate([
                {
                    $match: {
                        followerId : new mongoose.Types.ObjectId(userId),
                    }
                },
                {
                    $lookup : {
                        from : "posts",
                        localField : "followingId",
                        foreignField : "postedBy",
                        as : "posts",
                        pipeline : [
                            {
                                $lookup:{
                                    from : "users",
                                    localField : "postedBy",
                                    foreignField : "_id",
                                    as : "owner",
                                    pipeline : [
                                       {
                                        $project : {
                                            _id : 1,
                                            name : 1,
                                            avatar : 1
                                        }
                                       }
                                    ]
                                },
                                
                            },
                            {
                                $addFields : {
                                    owner : {
                                        $first : "$owner"
                                    }
                                }
                            }
                           
                        ]
                    }
                },
                {
                    $unwind : "$posts"
                },
                {
                    $replaceRoot: { newRoot: "$posts" }
                }
 
            ]);
            
            res.status(200).json({
                success: true,
                message: "All following user posts fetched Successfully",
                data : posts,
            });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)


