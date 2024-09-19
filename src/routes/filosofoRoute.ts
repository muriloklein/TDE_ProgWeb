import express from "express";
import { FilosofoController } from "../controllers/filosofoController";

const controller = new FilosofoController();
const router = express.Router();

router.post("/filosofo", controller.create);
router.get("/filosofos", controller.getAll);
router.get("/filosofo/:id", controller.getById);
router.put("/filosofo/:id", controller.update);
router.delete("/filosofo/:id", controller.delete);

export default router;
