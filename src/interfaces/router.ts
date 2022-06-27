import { Router } from 'express';

const router = Router();

router.use('/api/', (req, res) => {
    return res.status(200).json({ status: 'ok' });
});

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;
