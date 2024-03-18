import { Response,NextFunction } from "express";
import { IRelationRequest,
        IRelation ,
         GetUser }
         from "Interfaces/interfaces.js";
import { catchAsyncError } from "middlewares/catchAsyncError.js";
import ErrorHandler from "utils/ErrorHandler.js";
import { Relation } from "models/Relation.js";
import mongoose from "mongoose";


//  if user already followed then it will simply unfollowed unless it will make follow
export const handleFollow = catchAsyncError(
    async (req:IRelationRequest,res:Response,next:NextFunction)=>{

        const myId = req.user._id;
        const { profileId } = req.params;
        
          try {
            if ( !profileId ){
                next ( new ErrorHandler("not having any  folowingId",402));
            }

            const alreadyFollowed: IRelation = await Relation.findOne({followerId:myId,followingId:profileId});
            
            if(alreadyFollowed){
                
                await Relation.deleteOne({followerId:myId,followingId:profileId});

                return  res.status(200).json({
                    success : true,
                    messeage : "successfully unfollow",
                })
            }
                
            const following:IRelation = await Relation.create({
                    followerId : myId, // this will be as follower
                    followingId : profileId, // this will be the followed Id 
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

// fetched all followers 
export const fetchAllFollowers = catchAsyncError(
    async (req:GetUser|IRelationRequest,res:Response,next:NextFunction)=>{

        const { profileId } = req.params;
        const myId = req.user._id;
        const searchId = profileId?profileId:myId;

        try {
            const allFollowers = await Relation.aggregate(
                [
                    {
                        $match: {
                            followingId : new mongoose.Types.ObjectId(searchId),
                        }
                    },
                    {
                        $lookup : {
                            from : "users",
                            localField : "followerId",
                            foreignField : "_id",
                            as : "user"
                        }
                    },
                    {
                        $unwind:"$user",
                    },
                    {
                        $project : {
                           _id : "$user._id",
                           name : "$user.name",
                           avatar:"$user.avatar",
                        }
                    }
                ]
            )

            res.status(200).json({
                success : true,
                message : "successfully fetched all followers",
                data : allFollowers,
            })
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)

// fetched all following user 
export const fetchAllFollowingUsers = catchAsyncError(
    async (req:GetUser|IRelationRequest,res:Response,next:NextFunction)=>{

        const { profileId } = req.params;
        const myId = req.user._id;
        const searchId = profileId?profileId:myId;
        

        try {
            const allFollowingUsers = await Relation.aggregate(
                [
                    {
                        $match: {
                            followerId : new mongoose.Types.ObjectId(searchId),
                        }
                    },
                    {
                        $lookup : {
                            from : "users",
                            localField : "followerId",
                            foreignField : "_id",
                            as : "user"
                        }
                    },
                    {
                        $unwind:"$user",
                    },
                    {
                        $project : {
                           _id : "$user._id",
                           name : "$user.name",
                           avatar:"$user.avatar",
                        }
                    }
                ]
            )

            res.status(200).json({
                success : true,
                message : "successfully fetched all following Users",
                data : allFollowingUsers,
            })
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
)