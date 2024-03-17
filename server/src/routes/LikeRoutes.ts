import { handleLIke } from "controllers/LikeController.js";
import { Router } from "express";
import { isAuthenticated } from "middlewares/auth.js";

const router:Router = Router();

router.route("/handle-like/:postId").post(isAuthenticated,handleLIke);

export default router;