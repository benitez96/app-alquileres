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
export class Property {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  location: string

  @Column()
  adress: string

  @Column()
  description: string

  @Column()
  price: number


  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  @DeleteDateColumn()
  deletedDate: Date

  // @ManyToMany(() => Organization, (organization) => organization.users)
  // @JoinTable()
  // organizations: Organization[]
  
  // @ManyToMany(() => Organization, (organization) => organization.users)
  // @JoinTable()
  // organizations: Organization[]
  
  // @ManyToMany(() => tags, (tag) => tag.users)
  // @JoinTable()
  // tags: Property[]

}
