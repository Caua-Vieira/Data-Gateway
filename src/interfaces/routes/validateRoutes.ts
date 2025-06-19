import { Router } from "express";
import { ValidadePayloadController } from "../controller/validatePayloadController";

export const validateRoutes = (controller: ValidadePayloadController): Router => {
    const router = Router();

    router.post("/validate", (req, res) => controller.handle(req, res));

    return router
}