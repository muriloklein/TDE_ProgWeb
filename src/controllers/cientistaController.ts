import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import CientistaRepository from "../repositories/cientistaRepository";

export class CientistaController {
  private CientistaRepository: CientistaRepository;

  constructor() {
    this.CientistaRepository = new CientistaRepository(appDataSource);
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    const cientistas = await this.CientistaRepository.getAll();
    if (!cientistas.length) res.status(204);
    else res.status(200).json(cientistas);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const cientista = await this.CientistaRepository.getById(
      parseInt(req.params.id)
    );
    if (!cientista) {
      res.status(404).json({ message: "cientista not found" });
    } else {
      res.status(200).json(cientista);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const newCientista = await this.CientistaRepository.create(req.body);
    if (newCientista) res.status(201).json({ message: "Cientista added" });
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const updatedCientista = await this.CientistaRepository.update(
      parseInt(req.params.id),
      req.body
    );
    if (!updatedCientista) {
      res.status(404).send("Cientista not found");
    } else {
      res.status(200).json(updatedCientista);
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const success = await this.CientistaRepository.delete(
      parseInt(req.params.id)
    );
    if (!success) {
      res.status(404).send("Cientista not found");
    } else {
      res.status(200).json({ message: "Cientista excluido com sucesso" });
    }
  };
}
