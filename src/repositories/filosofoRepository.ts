import { DataSource, In, Repository } from "typeorm";
import FilosofoEntity from "../entities/filosofo";

class FilosofoRepository implements FilosofoRepository {
  private repository: Repository<FilosofoEntity>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(FilosofoEntity);
  }

  async getAll(): Promise<FilosofoEntity[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<FilosofoEntity | undefined> {
    const filosofo = await this.repository.findOneBy({ id });
    return filosofo || undefined;
  }

  async getBy(ids: number[]): Promise<FilosofoEntity[] | undefined> {
    const filosofos = await this.repository.findBy({
      id: In(ids),
    });
    return filosofos || undefined;
  }

  async create(filosofo: Omit<FilosofoEntity, "id">): Promise<FilosofoEntity> {
    const newFilosofo = this.repository.create(filosofo);
    return this.repository.save(newFilosofo);
  }

  async update(
    id: number,
    filosofo: Partial<Omit<FilosofoEntity, "id">>
  ): Promise<FilosofoEntity | undefined> {
    const filosofoToUpdate = await this.getById(id);

    if (!filosofoToUpdate) {
      return undefined;
    }
    const updatedFilosofo = this.repository.merge(filosofoToUpdate, filosofo);
    return this.repository.save(updatedFilosofo);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result?.affected ? result.affected > 0 : false;
  }
}

export default FilosofoRepository;
