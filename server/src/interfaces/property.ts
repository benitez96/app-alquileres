import { User } from "./user"

export interface Property {

  id: number
  name: string
  location: string
  adress: string
  description: string
  price: number
  published_until: Date
  createdDate: Date
  updatedDate: Date
  deletedDate: Date
  user: User
  // state: State
  // pictures: Picture[]
  // tags: Tag[]
}

