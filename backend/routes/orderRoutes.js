import express from "express";
import pro from "../middleware/auth.js";
import { createOrder, getOrderById } from "../controllers/orderController.js";
const router = express.Router();
router.route("/").post(pro, createOrder);
router.route("/:id").get(pro, getOrderById);

export default router;
