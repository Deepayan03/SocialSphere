import { Like } from "models/Like.js";
import { Response,NextFunction } from "express";
import { catchAsyncError } from "middlewares/catchAsyncError.js";
import ErrorHandler from "utils/ErrorHandler.js";
import { IlikeRequestData } from "Interfaces/interfaces.js";
import { Ilike } from "Interfaces/interfaces.js";
import mongoose from "mongoose";

// handle like api call in way that if already user liked then the liked will be removed unless new like will be added
export const handleLIke = catchAsyncError (
    async (req:IlikeRequestData,res:Response,next:NextFunction)=>{
        const userId = req.user._id;
        const postId = req.params.postId;
        
        try {

            const existUserLike: Ilike[] = await Like.find({likedBy:userId,postId:postId});
            
            if(existUserLike.length){
                
                await Like.deleteOne({likedBy:userId,postId:postId});

                return  res.status(200).json({
                    success : true,
                    messeage : "successfully removed like",
                })
            }
                
            const like = await Like.create({
                    likedBy : userId,
                    postId : postId,
            })
        
            return res.status(200).json({
                success : true,
                message : "like successfully added",
            })
           

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)

// fetched all user partial details who like a particular post 
export const getLikesOfParticularPost = catchAsyncError(
    async(req:IlikeRequestData,res:Response,next:NextFunction)=>{
        
        const { postId } = req.params;

        try {
            const allLikes:Ilike[] = await Like.aggregate([
                {
                    $match: {
                        postId: new mongoose.Types.ObjectId(postId),
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "likedBy",
                        foreignField: "_id",
                        as: "liker"
                    }
                },
                {
                    $unwind: "$liker" 
                },
                {
                    $project: {
                        "_id": "$liker._id",
                        "username": "$liker.name",
                        "avatar": "$liker.avatar"
                    }
                }
            ]);

            
            res.status(200).json({
                success : true,
                message : "all likes fetched successfully",
                data : allLikes,
            })

        } catch (error) {
            console.log(error.message);
            next(error);
        } 
        
    }
       
)