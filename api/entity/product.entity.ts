import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, JoinTable, OneToMany } from "typeorm";
import { Tag, OrderItem, Image } from "."

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public brand!: string;

  @Column()
  public price!: number;

  @Column()
  public stock!: number;

  @Column()
  public shipping!: string;

  @Column()
  public description!: string;

  @ManyToMany(type => Image, image => image.products)
  @JoinTable()
  public images!: Image[];

  @ManyToMany(type => Tag, tag => tag.products)
  @JoinTable()
  public tags!: Tag[];

  @OneToMany(type => OrderItem, orderItem => orderItem.product)
  public orderItems!: OrderItem[];
}
