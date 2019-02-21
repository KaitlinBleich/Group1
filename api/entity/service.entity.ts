import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column()
  public description!: string;

  @Column({type: "double"})
  public price!: number;
}
