import { NextFunction, Request } from 'express';
import { AuthException } from '../../domain/errors/errors';
import jwt from 'jsonwebtoken';

export const jwtMiddleware = (req: Request, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        throw new AuthException('Token não informado');
    }

    const token = authHeader.split(' ')[1];
    const JWT_SECRET = process.env.JWT_SECRET || 'super-secret';

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // req.user = decoded;
        next();
    } catch {
        throw new AuthException('Token inválido');
    }
};
