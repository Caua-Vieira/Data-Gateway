import { z } from 'zod';
import { AbstractPayloadValidator } from '../../domain/contracts/abstractPayloadValidator';
import { OrderPayload } from '../../domain/types/orderPayload';

const orderSchema = z.object({
    userId: z.string().uuid(),
    items: z.array(
        z.object({
            productId: z.string().uuid(),
            quantity: z.number().int().positive(),
        })
    ).nonempty('Deve haver ao menos um item no pedido'),
    totalAmount: z.number().positive('Total deve ser maior que zero'),
    shippingAddress: z.string().min(5),
    createdAt: z.string().refine(val => !isNaN(Date.parse(val)), {
        message: 'Data inválida',
    }),
});

export class ZodOrderPayloadValidator implements AbstractPayloadValidator {
    validate(data: any): OrderPayload {
        const parsed = orderSchema.parse(data);

        return {
            orderId: crypto.randomUUID(),
            userId: parsed.userId,
            items: parsed.items,
            totalAmount: parsed.totalAmount,
            shippingAddress: parsed.shippingAddress,
            createdAt: new Date(parsed.createdAt),
        };
    }
}
