import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { About, Product } from ".";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public url!: string;

  @ManyToMany(type => Product, product => product.images)
  public products!: Product[];

  @OneToOne(type => About, about => about.image)
  public about!: About;

}
