import express from "express";
import { healthCheckController } from "../controllers/healthCheckController";

const controller = new healthCheckController();
const router = express.Router();

router.get("/healthcheck", controller.get);

export default router;
