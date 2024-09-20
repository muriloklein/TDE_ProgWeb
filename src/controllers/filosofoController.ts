import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import FilosofoRepository from "../repositories/filosofoRepository";

export class FilosofoController {
  private FilosofoRepository: FilosofoRepository;

  constructor() {
    this.FilosofoRepository = new FilosofoRepository(appDataSource);
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    const filosofos = await this.FilosofoRepository.getAll();
    if (!filosofos.length) res.status(204);
    else res.status(200).json(filosofos);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const filosofo = await this.FilosofoRepository.getById(
      parseInt(req.params.id)
    );
    if (!filosofo) {
      res.status(404).json({ message: "filosofo not found" });
    } else {
      res.status(200).json(filosofo);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const newFilosofo = await this.FilosofoRepository.create(req.body);
    if (newFilosofo) res.status(201).json({ message: "Filosofo added" });
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const updatedFilosofo = await this.FilosofoRepository.update(
      parseInt(req.params.id),
      req.body
    );
    if (!updatedFilosofo) {
      res.status(404).json({ message: "Filosofo not found" });
    } else {
      res.status(200).json(updatedFilosofo);
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const success = await this.FilosofoRepository.delete(
      parseInt(req.params.id)
    );
    if (!success) {
      res.status(404).json({ message: "Filosofo not found" });
    } else {
      res.status(200).json({ message: "Filosofo excluido com sucesso" });
    }
  };
}
