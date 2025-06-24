import { Container } from "typescript-ioc";
import { AbstractPayloadValidator } from "../../domain/contracts/abstractPayloadValidator";
import { ZodPayloadValidator } from "../validators/zodPayloadValidator";
import { AbstractPayloadRepository } from "../../domain/contracts/abstractPayloadRepository";
import { PayloadRepository } from "../repositories/payloadRepository";

Container.bind(AbstractPayloadValidator).to(ZodPayloadValidator);
Container.bind(AbstractPayloadRepository).to(PayloadRepository);
