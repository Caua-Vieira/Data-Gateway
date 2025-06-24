import { NextFunction, Request, Response } from "express";
import { ValidationException } from "../../domain/errors/errors";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof ValidationException) {
        res.status(400).json({ error: err.message });
        return;
    }

    res.status(500).json({ error: 'Erro interno do servidor' });
}