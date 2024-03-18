import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import errorHandler from "../utils/ErrorHandler.js";
import { sendToken } from "../utils/SendToken.js";
import cloudinary from "cloudinary";
import getDataUri from "../utils/dataUri.js";
import {
  GetUser,
  RegistrationRequest,
  RequestWithFile,
  User as UserType,
} from "../Interfaces/interfaces.js";
// Registration Logic
export const register = catchAsyncError(
  
  
  async (req: RegistrationRequest, res: Response, next: NextFunction) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const file = req.file;

    if (!name || !email || !password || !file) {
      return next(
        new errorHandler(
          "Oops! Looks like something's missing. Fill in all fields, please",
          400
        )
      );
    }

    try {
      const userExist: UserType | null = await User.findOne({ email });

      if (userExist) {
        return next(new errorHandler("User already exists", 409));
      }

      const fileUri: string = getDataUri(file);
      const myCloud: cloudinary.UploadApiResponse =
        await cloudinary.v2.uploader.upload(fileUri);

      if (password.length < 6) {
        return next(
          new errorHandler("Password must be at least 6 characters", 400)
        );
      }

      const user: UserType = await User.create({
        name,
        email,
        password,
        avatar: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      });

      sendToken(res, user, "Registered Successfully", 201);
    } catch (error: unknown) {
      console.log(error)
      next(error);
    }
  }
);

// Login Logic
export const login = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    

    if (!email || !password) {
      return next(
        new errorHandler(
          "Oops! Looks like something's missing. Fill in all fields, please",
          400
        )
      );
    }

    try {
      const user: any = await User.findOne({ email }).select("password");

      if (!user) {
        return next(new errorHandler("User doesn't exist", 401));
      }

      const isMatch: boolean = await user.comparePassword(password);
      
      if (!isMatch) {
        return next(new errorHandler("Incorrect Email or Password", 401));
      }

      sendToken(res, user, "Logged in successfully", 200);
    } catch (error: unknown) {
      console.log(error);
      next(error);
    }
  }
);

// Logout Logic
export const logout = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .status(200)
        .cookie("userToken", null, {
          expires: new Date(Date.now()),
        })
        .json({
          success: true,
          message: "Logout Successfully",
        });
    } catch (error) {
      next(error);
    }
  }
);

// Get My/User Profile Logic
export const getMyProfile = catchAsyncError(
  async (req: GetUser, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.user._id);
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

// Delete My Profile Logic
export const deleteMyProfile = catchAsyncError(
  async (req: GetUser, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.user._id);
      await User.deleteOne({ _id: user._id });
      res
        .status(200)
        .cookie("userToken", null, {
          expires: new Date(Date.now()),
        })
        .json({
          success: true,
          message: `${user.name} account has been deleted permanently`,
        });
    } catch (error) {
      next(error);
    }
  }
);

// Change password Logic
export const changePassword = catchAsyncError(
  async (req: GetUser, res: Response, next: NextFunction) => {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return next(
        new errorHandler(
          "Oops! Looks like something's missing. Fill in all fields, please",
          400
        )
      );
    }

    try {
      const user: any = await User.findById(req.user._id).select(
        "+password"
      );
      const isMatch: boolean = await user.comparePassword(oldPassword);

      if (!isMatch) {
        return next(new errorHandler("Incorrect old Password", 401));
      }

      user.password = newPassword;
      await user.save();

      res.status(200).json({
        success: true,
        message: "Password Changed Successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

// Update Profile Logic
export const updateProfile = catchAsyncError(
  async (req: GetUser, res: Response, next: NextFunction) => {
    const { name, email, bio } = req.body;

    try {
      const user:any = await User.findById(req.user._id);

      if (name) {
        user.name = name;
      }
      if (email) {
        user.email = email;
      }
      if (bio) {
        user.bio = bio;
      }
      await user.save();

      res.status(200).json({
        success: true,
        message: "Profile Updated Successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

export const updateProfilePicture = catchAsyncError(
  async (req: RequestWithFile, res: Response, next: NextFunction) => {
    const file = req.file;
    if (!file) {
      return next(new errorHandler("No file uploaded", 400));
    }

    try {
      const user = await User.findById(req.user._id);

      if (!user.avatar) {
        user.avatar = {};
      }

      const fileUri: string = getDataUri(file);
      const myCloud = await cloudinary.v2.uploader.upload(fileUri);

      if (user.avatar.public_id) {
        await cloudinary.v2.uploader.destroy(user.avatar.public_id);
      }

      user.avatar.public_id = myCloud.public_id;
      user.avatar.url = myCloud.secure_url;

      await user.save();

      res.status(200).json({
        success: true,
        message: "Profile Picture Updated Successfully",
      });
    } catch (error: unknown) {
      next(error);
    }
  }
);
