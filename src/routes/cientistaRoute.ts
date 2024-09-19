import express from "express";
import { CientistaController } from "../controllers/cientistaController";

const controller = new CientistaController();
const router = express.Router();

router.post("/cientista", controller.create);
router.get("/cientistas", controller.getAll);
router.get("/cientista/:id", controller.getById);
router.put("/cientista/:id", controller.update);
router.delete("/cientista/:id", controller.delete);

export default router;
