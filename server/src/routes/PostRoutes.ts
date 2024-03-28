import  { Router } from "express";
import {
     createPost,
     deleteAllUserPosts,
     deleteParticularPost, 
     getAllFollowingUsersPost, 
     getParticularUserPosts, 
     getUserPosts, 
     updatePost, 
    } from "../controllers/PostController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import  { multipleUpload } from "../middlewares/multer.js";

const router: Router = Router();

// add post - route
router.route("/create").post(isAuthenticated,multipleUpload,createPost);

// update post - route
router.route("/update/:id").patch(isAuthenticated,updatePost);

// delete post - route
router.route("/delete/:id").delete(isAuthenticated,deleteParticularPost);

// delete all user post - route
router.route("/delete-all").delete(isAuthenticated,deleteAllUserPosts);

// get all posts of particular user - route
router.route("/get/:id").get(isAuthenticated,getParticularUserPosts);

// get all posts of  user - route
router.route("/my-posts").get(isAuthenticated,getUserPosts);

// get all following users posts  - route
router.route("/following-posts").get(isAuthenticated,getAllFollowingUsersPost);


export default router;
