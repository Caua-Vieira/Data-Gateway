import { NextFunction, Request, Response } from "express";
import { AuthException, ValidationException } from "../../domain/errors/errors";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof ValidationException) {
        res.status(400).json({ error: err.message });
        return;
    }

    if (err instanceof AuthException) {
        res.status(401).json({ error: err.message });
        return;
    }

    res.status(500).json({ error: 'Erro interno do servidor' });
}