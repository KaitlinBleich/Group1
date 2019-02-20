import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Category, Subcategory, OrderItem, Image } from "."

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public brand!: string;

  @Column({type: "double"})
  public price!: number;

  @Column()
  public stock!: number;

  @Column()
  public shipping!: string;

  @Column()
  public description!: string;

  @OneToMany(type => Image, image => image.product, {cascade: ["insert", "remove"]})
  public images!: Image[];

  @ManyToOne(type => Category, category => category.products)
  public category!: Category;
  
  @ManyToOne(type => Subcategory, subcategory => subcategory.products)
  public subcategory!: Subcategory;

  @OneToMany(type => OrderItem, orderItem => orderItem.product)
  public orderItems!: OrderItem[];
}
