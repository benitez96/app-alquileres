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
export class State {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string


  // @ManyToMany(() => Property, (property) => property.users)
  // @JoinTable()
  // propertys: Property[]


}
