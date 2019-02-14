import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "."

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @ManyToMany(type => Product, product => product.tags)
  public products!: Product[];
}
