import { OrderPayload } from "../types/orderPayload";

export abstract class AbstractPayloadValidator {
    abstract validate(data: any): OrderPayload;
}