import express from "express";
import { CidadeController } from "../controllers/cidadeController";

const controller = new CidadeController();
const router = express.Router();

router.post("/cidade", controller.create);
router.get("/cidades", controller.getAll);
router.get("/cidade/:id", controller.getById);
router.put("/cidade/:id", controller.update);
router.delete("/cidade/:id", controller.delete);

export default router;
