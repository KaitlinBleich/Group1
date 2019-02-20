import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subcategory, Product } from "."

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @OneToMany(type => Subcategory, subcategory => subcategory.category)
  public subcategories!: Subcategory[];

  @OneToMany(type => Product, product => product.category)
  public products!: Product[];
}
