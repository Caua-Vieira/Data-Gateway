import { Inject } from "typescript-ioc";
import { AbstractPayloadRepository } from "../../domain/contracts/abstractPayloadRepository";
import { AbstractPayloadValidator } from "../../domain/contracts/abstractPayloadValidator";
import { Payload } from "../../domain/entities/payloadEntity";

export class ValidatePayloadUseCase {

    constructor(
        @Inject private readonly validator: AbstractPayloadValidator,
        @Inject private readonly repository: AbstractPayloadRepository
    ) { }

    async execute(input: any): Promise<Payload> {
        const payload = this.validator.validate(input);
        await this.repository.save(payload);
        return payload;
    }
}