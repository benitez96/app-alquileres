import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { Property } from "./property"


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  login: string

  @Column()
  password: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ unique: true })
  email: string

  @Column()
  phone: string

  @Column({ nullable: true })
  avatar: string

  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  @DeleteDateColumn()
  deletedDate: Date

  @OneToMany(() => Property, (property) => property.user)
  properties: Property[]

}
