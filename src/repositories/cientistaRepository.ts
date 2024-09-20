import { DataSource, In, Repository } from "typeorm";
import CientistaEntity from "../entities/cientista";

class CientistaRepository implements CientistaRepository {
  private repository: Repository<CientistaEntity>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(CientistaEntity);
  }

  async getAll(): Promise<CientistaEntity[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<CientistaEntity | undefined> {
    const cientista = await this.repository.findOneBy({ id });
    return cientista || undefined;
  }

  async getBy(ids: number[]): Promise<CientistaEntity[] | undefined> {
    const cientistas = await this.repository.findBy({
      id: In(ids),
    });
    return cientistas || undefined;
  }

  async create(
    cientista: Omit<CientistaEntity, "id">
  ): Promise<CientistaEntity> {
    const newCientista = this.repository.create(cientista);
    return this.repository.save(newCientista);
  }

  async update(
    id: number,
    cientista: Partial<Omit<CientistaEntity, "id">>
  ): Promise<CientistaEntity | undefined> {
    const cientistaToUpdate = await this.getById(id);

    if (!cientistaToUpdate) {
      return undefined;
    }

    const updatedCientista = this.repository.merge(
      cientistaToUpdate,
      cientista
    );
    return this.repository.save(updatedCientista);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result?.affected ? result.affected > 0 : false;
  }
}

export default CientistaRepository;
