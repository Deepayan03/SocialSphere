import { getLikesOfParticularPost, handleLIke } from "controllers/LikeController.js";
import { Router } from "express";
import { isAuthenticated } from "middlewares/auth.js";

const router:Router = Router();

// handle like request if like exist then simply remove like or added like
router.route("/handle-like/:postId").post(isAuthenticated,handleLIke);
// get fetched all likes of a particular post
router.route("/get/:postId").get(isAuthenticated,getLikesOfParticularPost);

export default router;