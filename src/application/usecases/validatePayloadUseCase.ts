import { Inject } from "typescript-ioc";
import { AbstractPayloadValidator } from "../../domain/contracts/abstractPayloadValidator";
import { AbstractQueueRepository } from "../../domain/contracts/abstractQueryRepository";
import { OrderPayload } from "../../domain/types/orderPayload";

export class ValidatePayloadUseCase {

    constructor(
        @Inject private readonly validator: AbstractPayloadValidator,
        @Inject private readonly queue: AbstractQueueRepository
    ) { }

    async execute(input: any): Promise<OrderPayload> {
        const payload = this.validator.validate(input);
        await this.queue.publish(payload);
        return payload;
    }
}