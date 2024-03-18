import { Router } from "express";
import { isAuthenticated } from "middlewares/auth.js";
import { handleFollow } from "controllers/RelationController.js";

const router = Router();

// handle follow - if user followed then simply unfollow otherwise make user followed
router.route("/handle-folow/:followingId").post(isAuthenticated,handleFollow);

export default router;