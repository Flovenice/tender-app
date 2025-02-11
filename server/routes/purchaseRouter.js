import { Router } from "express";
import purchaseController from "../controllers/purchaseController.js";
const router = new Router();

router.post('/', purchaseController.create);
router.get('/', purchaseController.getAll);

export default router;