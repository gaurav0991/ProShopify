import express from "express";
import pro from "../middleware/auth.js";
import {
  authSign,
  getProfile,
  registerUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/login").post(authSign);
router.route("/register").post(registerUser);
router.route("/update").put(pro, updateUser);

router.route("/profile").get(pro, getProfile);

export default router;
