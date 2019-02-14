import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from ".";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public firstName!: string;

  @Column()
  public lastName!: string;

  @Column()
  public street!: string;

  @Column()
  public city!: string;

  @Column()
  public state!: string;

  @Column()
  public zip!: string;

  @OneToOne(type => Order, order => order.address)
  public order!: Order;

}
