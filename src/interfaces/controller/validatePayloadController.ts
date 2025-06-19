import { Request, Response } from 'express';

export class ValidadePayloadController {

    async handle(req: Request, res: Response): Promise<void> {
        // const result = await useCase.execute(req.body);
        res.status(200).json({ message: 'Payload válido', data: '' });
    }
}