import express, { Router } from "express";
import {
     createPost,
     deleteAllUserPosts,
     deleteParticularPost, 
     getParticularUserPosts, 
     getUserPosts, 
     updatePost 
    } from "../controllers/PostController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router: Router = express.Router();

// add post - route
router.route("/create").post(isAuthenticated,singleUpload,createPost);
// update post - route
router.route("/update/:id").patch(isAuthenticated,updatePost);
// delete post - route
router.route("/delete/:id").delete(isAuthenticated,deleteParticularPost);
// delete all user post - route
router.route("/deleteAll").delete(isAuthenticated,deleteAllUserPosts);
// get all posts of particular user - route
router.route("/get/:id").get(isAuthenticated,getParticularUserPosts);
// get all posts of  user - route
router.route("/get/:id").get(isAuthenticated,getUserPosts);




export default router;
