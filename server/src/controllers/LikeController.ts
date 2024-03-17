import { Like } from "models/Like.js";
import { Response,NextFunction } from "express";
import { catchAsyncError } from "middlewares/catchAsyncError.js";
import ErrorHandler from "utils/ErrorHandler.js";
import { IlikeRequestData } from "Interfaces/interfaces.js";

export const handleLIke = catchAsyncError (
    async (req:IlikeRequestData,res:Response,next:NextFunction)=>{
        const userId = req.user._id;
        const postId = req.params.postId;
        
        
        try {
            if ( !postId ){
                next ( new ErrorHandler("not having particular post",401));
            }

            const existUserLike = await Like.find({likedBy:userId,postId:postId});
            
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

            await like.save();
        
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