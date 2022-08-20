import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { Property } from "./property"


@Entity()
export class Picture {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  file_path: string


  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  @DeleteDateColumn()
  deletedDate: Date

  @ManyToOne(() => Property, (property) => property.pictures)
  property: Property


}
