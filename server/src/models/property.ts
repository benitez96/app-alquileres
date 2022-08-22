import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { Picture } from "./picture"
import { State } from "./state"
import { Tag } from "./tag"
import { User } from "./user"


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

  @Column('text')
  description: string

  @Column()
  price: number

  @Column()
  published_until: Date

  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  @DeleteDateColumn()
  deletedDate: Date

  @ManyToOne(() => User, (user) => user.properties)
  user: User

  @ManyToOne(() => State, (state) => state.properties)
  state: State

  @OneToMany(() => Picture, (picture) => picture.property)
  pictures: Picture[]

  @ManyToMany(() => Tag, (tag) => tag.properties)
  @JoinTable()
  tags: Tag[]
}
