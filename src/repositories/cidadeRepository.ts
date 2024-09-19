import { DataSource, In, Repository } from "typeorm";
import CidadeEntity from "../entities/cidade";

class CidadeRepository implements CidadeRepository {
  private repository: Repository<CidadeEntity>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(CidadeEntity);
  }

  async getAll(): Promise<CidadeEntity[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<CidadeEntity | undefined> {
    const cidade = await this.repository.findOneBy({ id });
    return cidade || undefined;
  }

  async getBy(ids: number[]): Promise<CidadeEntity[] | undefined> {
    const cidades = await this.repository.findBy({
      id: In(ids),
    });
    return cidades || undefined;
  }

  async create(cidade: Omit<CidadeEntity, "id">): Promise<CidadeEntity> {
    const newCidade = this.repository.create(cidade);
    return this.repository.save(newCidade);
  }

  async update(
    id: number,
    cidade: Partial<Omit<CidadeEntity, "id">>
  ): Promise<CidadeEntity | undefined> {
    const cidadeToUpdate = await this.getById(id);

    if (!cidadeToUpdate) {
      return undefined;
    }
    return this.repository.merge(cidadeToUpdate, cidade);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result?.affected ? result.affected > 0 : false;
  }
}

export default CidadeRepository;
