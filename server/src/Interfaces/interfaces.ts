import { Request } from "express";
import { Document } from "mongoose";

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
  RequestWithFile
};
