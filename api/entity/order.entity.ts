import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Address } from ".";
import { OrderItem } from "./orderItem.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public orderNumber!: string;

  @Column()
  public status!: string;

  @Column()
  public date!: Date;

  @Column()
  public subtotal!: number;

  @Column()
  public discount!: number;

  @Column()
  public shipping!: number;

  @Column()
  public total!: number;

  @OneToOne(type => Address, address => address.order)
  @JoinColumn()
  public address!: Address;

  @OneToMany(type => OrderItem, orderItem => orderItem.order)
  public orderItems!: Order[];
}
