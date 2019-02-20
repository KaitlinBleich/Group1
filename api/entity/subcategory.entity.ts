import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Category, Product } from "."

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @ManyToOne(type => Category, category => category.subcategories)
  public category!: Category;

  @OneToMany(type => Product, product => product.category)
  public products!: Product[];
}
