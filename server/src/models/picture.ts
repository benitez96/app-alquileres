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

  // one to many
  // @ManyToMany(() => Property, (property) => property.users)
  // @JoinTable()
  // propertys: Property[]


}
