import { Router } from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.delete('/delete', userController.delete);
router.get('/auth', authMiddleware, userController.check);

export default router;