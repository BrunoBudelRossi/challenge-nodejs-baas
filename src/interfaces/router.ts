import { Router } from 'express';
import userRouter from './routes/userRouter';

const router = Router();

router.use('/api/users', userRouter);

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;
