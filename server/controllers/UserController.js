import User from "../models/User.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import errorHandler from "../utils/ErrorHandler.js";
import { sendToken } from "../utils/SendToken.js";
import cloudinary from "cloudinary";
import getDataUri from "../utils/dataUri.js";

// Registration Logic
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new errorHandler("Please add all fields", 400));
  }

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    return next(new errorHandler("User is already exist", 409));
  }

  const userCreate = await User.create({
    name,
    email,
    password,
  });

  sendToken(res, userCreate, "Registered Successfully", 201);
});

// Login Logic
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new errorHandler("Please add all fields", 400));
  }

  const user = await User.findOne({ email }).select("password");

  if (!user) {
    return next(new errorHandler("User doesn't exist", 401));
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return next(new errorHandler("Incorrect Email or Password", 401));
  }
  sendToken(res, user, "Logged in successfully", 200);
});

// Logout Logic
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("userToken", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout Successfully",
    });
});

// Get My/User Profile Logic
export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete My Profile Logic
export const deleteMyProfile = catchAsyncError(async (req, res, next) => {
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
});

// Change password Logic
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return next(
      new errorHandler(
        "Oops! Looks like something's missing. Fill in all fields, please",
        400
      )
    );
  }

  const user = await User.findById(req.user._id).select("+password");

  const isMatch = await user.comparePassword(oldPassword);

  if (!isMatch) {
    return next(new errorHandler("Incorrect old Password", 401));
  }

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

// Update Profile Logic
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email, bio } = req.body;

  const user = await User.findById(req.user._id);

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
});

export const updateProfilePicture = catchAsyncError(async (req, res, next) => {
  const file = req.file;
  if (!file) {
    return next(new errorHandler("No file uploaded", 400));
  }

  const user = await User.findById(req.user._id);

  // Check if user has an avatar object, create one if not
  if (!user.avatar) {
    user.avatar = {};
  }

  const fileUri = getDataUri(file);
  // Uploading new user profile picture in cloudinary
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  // If avatar.public_id already exists, delete previous avatar from Cloudinary
  if (user.avatar.public_id) {
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
  }

  // Setting the new id and url in our database
  user.avatar.public_id = myCloud.public_id;
  user.avatar.url = myCloud.secure_url;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Picture Updated Successfully",
  });
});

