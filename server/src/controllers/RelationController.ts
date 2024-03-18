import { Response,NextFunction } from "express";
import { IRelationRequest , IRelation } from "Interfaces/interfaces.js";
import { catchAsyncError } from "middlewares/catchAsyncError.js";
import ErrorHandler from "utils/ErrorHandler.js";
import { Relation } from "models/Relation.js";


// handle following . if user already followed then it will simply unfollowed unless it will make follow
export const handleFollow = catchAsyncError(
    async (req:IRelationRequest,res:Response,next:NextFunction)=>{

        const myId = req.user._id;
        const { followingId } = req.params;

        console.log(myId,followingId);
        

          try {
            if ( !followingId ){
                next ( new ErrorHandler("not having any  folowingId",402));
            }

            const alreadyFollowed: IRelation = await Relation.findOne({followerId:myId,followingId:followingId});
            
            if(alreadyFollowed){
                
                await Relation.deleteOne({followerId:myId,followingId:followingId});

                return  res.status(200).json({
                    success : true,
                    messeage : "successfully unflowed",
                })
            }
                
            const following:IRelation = await Relation.create({
                    followerId : myId,
                    followingId : followingId,
            })

            await following.save();
        
            return res.status(200).json({
                success : true,
                message : "successfully followed",
            })
           

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)