import express from 'express';

const router = express.Router();

router.get('/api/post', (req, res) => {
    res.status(200).json({ message: 'post page' });
})

export default router