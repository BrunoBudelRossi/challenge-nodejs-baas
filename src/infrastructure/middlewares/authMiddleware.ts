import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            status: 'error',
            message: 'Unauthorized',
        });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'error',
            message: err.message,
        });
    }
};
