import { AbstractPayloadRepository } from "../../domain/contracts/abstractPayloadRepository";
import { Payload } from "../../domain/entities/payloadEntity";

export class PayloadRepository implements AbstractPayloadRepository {

    save(payload: Payload): Promise<void> {
        throw new Error("Method not implemented.");
    }
}