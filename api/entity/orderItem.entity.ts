import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Product, Order } from ".";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public quantity!: number;

  @Column()
  public price!: number;

  @ManyToOne(type => Product, product => product.orderItems)
  public product!: Product;

  @ManyToOne(type => Order, order => order.orderItems)
  public order!: Order;

}
