import { Request } from "express";
import mongoose , { Document } from "mongoose";

interface ItextContent {
  text : string;
}

interface Imediacontent {
  media : {
    secure_url : string;
    public_id : string;
  }
  
}

type IPostContent = ItextContent | Imediacontent;

interface IPost extends Document {
  postedBy : mongoose.Schema.Types.ObjectId;
  caption? : string;
  contentType : "MEDIA" | "TEXT";
  postContent : IPostContent;
  visibility : boolean; 
}

interface IcreatePostRequest extends Request {
  body: {
    text?: string;
    caption?:string;
  };
  user: {
    _id: string;
  };
  file?: any;
}

interface IparticularPost extends Request {
  body : {
    text? : string;
    caption? : string;
  };
  params : {
    id : string;
  };
  user: {
    _id: string;
  };
}

interface Ilike extends Document {
  likedBy : mongoose.Schema.Types.ObjectId;
  postId : mongoose.Schema.Types.ObjectId;
  likedAt : Date;
  _id : mongoose.Schema.Types.ObjectId;
}

interface IlikeRequestData extends Request {
  params : {
    postId : string;
  };
  user: {
    _id: string;
  };
}

interface User extends Document {
  name: string;
  email: string;
  password?: string;
  bio?: string;
  avatar?: {
    public_id: string;
    url: string;
  };
  comparePassword(password: string): Promise<boolean>;
}

interface RegistrationRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
  file?: any;
}

interface GetUser extends Request {
  user: {
    _id: string;
  };
}

interface RequestWithFile extends GetUser {
  file: any;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
  statusCode: number;
  details?: string;
}

interface UserResponse {
  success: boolean;
  message: string;
  user?: User;
}

interface ProfileUpdateRequest {
  name?: string;
  email?: string;
  bio?: string;
}

interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

interface ProfilePictureUpdateResponse {
  success: boolean;
  message: string;
}

interface ProfilePictureUpdateRequest {
  file: any;
}

export {
  User,
  RegistrationRequest,
  LoginRequest,
  ErrorResponse,
  UserResponse,
  ProfileUpdateRequest,
  GetUser,
  ChangePasswordRequest,
  ProfilePictureUpdateResponse,
  ProfilePictureUpdateRequest,
  RequestWithFile,
  IPostContent,
  IPost,
  IcreatePostRequest,
  IparticularPost,
  Imediacontent,
  Ilike,
  IlikeRequestData,
};
