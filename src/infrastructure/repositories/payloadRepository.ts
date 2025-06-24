import { Inject } from "typescript-ioc";
import { AbstractPayloadRepository } from "../../domain/contracts/abstractPayloadRepository";
import { Payload } from "../../domain/entities/payloadEntity";
import { KnexDatabase } from "../database/knexConnection";

export class PayloadRepository implements AbstractPayloadRepository {

    constructor(
        @Inject private readonly knex: KnexDatabase
    ) { }

    async save(payload: Payload): Promise<void> {
        await this.knex.insert('payloads', payload);
    }
}