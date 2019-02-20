import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

enum Role {
  ADMIN = "ADMIN",
  EMPLOYEE = "EMPLOYEE"
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ unique: true })
  public username!: string;

  @Column()
  public firstName!: string;

  @Column()
  public lastName!: string;

  @Column()
  public password!: string;

  @Column()
  public role ?: string = Role.EMPLOYEE;
}
