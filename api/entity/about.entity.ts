import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Image } from ".";

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public greeting!: string;

  @Column()
  public description!: string;

  @Column()
  public location!: string;

  @Column()
  public hours!: string;

  @Column()
  public imageUrl!: string;

}
