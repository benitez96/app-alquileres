import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"


@Entity()
export class Tag {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string


  // @ManyToMany(() => Property, (property) => property.users)
  // @JoinTable()
  // propertys: Property[]


}
