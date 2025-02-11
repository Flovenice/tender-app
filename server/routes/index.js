import { Router } from "express";
import userRouter from './userRouter.js';
import purchaseRouter from './purchaseRouter.js';
const router = new Router();

router.use('/user', userRouter);
router.use('/purchase', purchaseRouter);

export default router;