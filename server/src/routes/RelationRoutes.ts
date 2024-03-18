import { Router } from "express";
import { isAuthenticated } from "middlewares/auth.js";
import { fetchAllFollowers,
        fetchAllFollowingUsers,
        handleFollow,
        } from "controllers/RelationController.js";

const router = Router();

// handle follow - if user followed then simply unfollow otherwise make user followed
router.route("/handle-folow/:profileId").post(isAuthenticated,handleFollow);

// fetched all followers of login user
router.route("/get-followers").get(isAuthenticated,fetchAllFollowers);

// fetched all followers of a particular user
router.route("/get-followers/:profileId").get(isAuthenticated,fetchAllFollowers);

// fetched all following users of login user
router.route("/get-following-users").get(isAuthenticated,fetchAllFollowingUsers);

// fetched all following users of a particular user
router.route("/get-following-users/:profileId").get(isAuthenticated,fetchAllFollowingUsers);

export default router;