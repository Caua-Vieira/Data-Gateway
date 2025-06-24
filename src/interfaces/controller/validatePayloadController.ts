import { Request, Response } from 'express';
import { ValidatePayloadUseCase } from '../../application/usecases/validatePayloadUseCase';
import { Inject } from 'typescript-ioc';

export class ValidadePayloadController {

    constructor(
        @Inject private readonly useCase: ValidatePayloadUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<void> {
        const result = await this.useCase.execute(req.body);
        res.status(200).json({ message: 'Payload válido', data: result });
    }
}