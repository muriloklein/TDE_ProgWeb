import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
  }
}

export default Cidade;
