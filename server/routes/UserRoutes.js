import express from "express";
import {
  changePassword,
  deleteMyProfile,
  getMyProfile,
  login,
  logout,
  register,
  updateProfile,
  updateProfilePicture,
} from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = new express.Router();

// Register Route
router.route("/register").post(register);

// Login Route
router.route("/login").post(login);

// Logout Route
router.route("/logout").get(logout);

// Get my profile Route
router.route("/myprofile").get(isAuthenticated, getMyProfile);

// Delete my profile Route
router.route("/myprofile").delete(isAuthenticated, deleteMyProfile);

//Change Password Route
router.route("/changepassword").put(isAuthenticated, changePassword);

//Update Profile Route
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// Update Profile Picture Route
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);

export default router;
