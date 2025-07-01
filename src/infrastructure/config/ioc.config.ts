import { Container } from "typescript-ioc";
import { AbstractPayloadValidator } from "../../domain/contracts/abstractPayloadValidator";
import { ZodOrderPayloadValidator } from "../validators/zodPayloadValidator";

Container.bind(AbstractPayloadValidator).to(ZodOrderPayloadValidator);
