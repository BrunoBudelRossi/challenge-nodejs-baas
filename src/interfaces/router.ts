import authMiddleware from '@infrastructure/middlewares/authMiddleware';
import { Router } from 'express';
import userController from './controllers/userController';
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRouter';

const router = Router();

router.post('/api/users', userController.createUser);
router.use('/api/auth', authRouter);
router.use('/api/users', authMiddleware, userRouter);

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;
