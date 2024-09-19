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
    if(!filosofos.length) res.status(204).json({message: "Nenhum filosofo cadastrado"}) // fazer testes para retornar caso não haja nenhum filosofo cadastrado
    else res.status(200).json(filosofos);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const filosofo = await this.FilosofoRepository.getById(
      parseInt(req.params.id)
    );
    if (!filosofo) {
      res.status(404).send("filosofo not found");
    } else {
      res.status(200).json(filosofo);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const newFilosofo = await this.FilosofoRepository.create(req.body);
    if (newFilosofo) res.status(201).json({ message: "Filosofo added" });
    // else res.status(400).json({message: "Parametros incorretos"}); // fazer testes e implementar feature
    // else res.status(409).json({message: "Filosofo ja cadastrado"}); // fazer testes e implementar feature
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const updatedFilosofo = await this.FilosofoRepository.update(
      parseInt(req.params.id),
      req.body
    );
    if (!updatedFilosofo) {
      res.status(404).send("Filosofo not found");
    } else {
      res.status(200).json(updatedFilosofo);
    }
    // else res.status(400).json({message: "Parametros incorretos"}); // fazer testes e implementar feature
    // else res.status(409).json({message: "Filosofo com esses parametros ja cadastrado"}); // fazer testes e implementar feature
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const success = await this.FilosofoRepository.delete(
      parseInt(req.params.id)
    );
    if (!success) {
      res.status(404).send("Filosofo not found");
    } else {
      res.status(200).json({message: "Filosofo excluido com sucesso"});
    }
  };
}
