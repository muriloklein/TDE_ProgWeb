import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Cidade from "./cidade";

@Entity()
export class Cientista {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  birthDay?: Date;

  @Column()
  deathDay?: Date;

  @ManyToOne(() => Cidade, (cidade: { id: number; }) => cidade.id)
  birhCity?: Cidade;

  constructor(id?: number, name?: string, birthDay?: Date, deathDay?: Date, birthCity?: Cidade) {
    this.id = id;
    this.name = name;
    this.birthDay = birthDay;
    this.deathDay = deathDay;
    this.birhCity = birthCity;
  }
}

export default Cientista;
