import { Payload } from "../entities/payloadEntity";

export abstract class AbstractPayloadRepository {
    abstract save(payload: Payload): Promise<void>;
}