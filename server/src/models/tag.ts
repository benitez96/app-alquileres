import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Property } from "./property"


@Entity()
export class Tag {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => Property, (property) => property.tags)
  properties: Property[]


}
