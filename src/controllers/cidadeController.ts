import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import CidadeRepository from "../repositories/cidadeRepository";

export class CidadeController {
  private CidadeRepository: CidadeRepository;

  constructor() {
    this.CidadeRepository = new CidadeRepository(appDataSource);
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    const cidades = await this.CidadeRepository.getAll();
    if (!cidades.length) res.status(204);
    else res.status(200).json(cidades);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const cidade = await this.CidadeRepository.getById(parseInt(req.params.id));
    if (!cidade) {
      res.status(404).json({ message: "cidade not found" });
    } else {
      res.status(200).json(cidade);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const newCidade = await this.CidadeRepository.create(req.body);
    if (newCidade) res.status(201).json({ message: "Cidade added" });
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const updatedCidade = await this.CidadeRepository.update(
      parseInt(req.params.id),
      req.body
    );
    if (!updatedCidade) {
      res.status(404).send("Cidade not found");
    } else {
      res.status(200).json(updatedCidade);
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const success = await this.CidadeRepository.delete(parseInt(req.params.id));
    if (!success) {
      res.status(404).json({ message: "cidade not found" });
    } else {
      res.status(200).json({ message: "Cidade excluida com sucesso" });
    }
  };
}
