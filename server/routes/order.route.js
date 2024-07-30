import { Router } from "express";
import { getOrders, intent, confirm } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router();

router.get("/", getOrders);
router.post("/create-payment-intent/:id", intent);
router.put("/", confirm);

export default router;
