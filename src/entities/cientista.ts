import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

  constructor(id?: number, name?: string, birthDay?: Date, deathDay?: Date) {
    this.id = id;
    this.name = name;
    this.birthDay = birthDay;
    this.deathDay = deathDay;
  }
}

export default Cientista;
