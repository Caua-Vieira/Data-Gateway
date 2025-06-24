import { Payload } from "../entities/payloadEntity";

export abstract class AbstractPayloadValidator {
    abstract validate(data: any): Payload;
}