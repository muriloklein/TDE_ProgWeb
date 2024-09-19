import { Request, Response } from "express";
import { appDataSource } from "../data-source";

export class healthCheckController {
  get = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({ message: "Sucesso" });
  };
}
