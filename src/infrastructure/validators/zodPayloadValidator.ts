// src/infra/validators/ZodPayloadValidator.ts

import { z } from 'zod';
import { AbstractPayloadValidator } from '../../domain/contracts/abstractPayloadValidator';
import { Payload } from '../../domain/entities/payloadEntity';

const payloadSchema = z.object({
    cpf: z.string().regex(/^\d{11}$/, 'CPF deve ter 11 dígitos'),
    nome: z.string().min(3),
    createdAt: z.string().refine(val => !isNaN(Date.parse(val)), {
        message: 'Data inválida',
    }),
});

export class ZodPayloadValidator implements AbstractPayloadValidator {
    validate(data: any): Payload {
        const parsed = payloadSchema.parse(data);

        return new Payload(
            crypto.randomUUID(),
            parsed.cpf,
            parsed.nome,
            new Date(parsed.createdAt)
        );
    }
}
