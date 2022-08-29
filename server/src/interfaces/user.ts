import { Property } from "./property"

export interface User {



  id: number,
  login: string,
  password?: string,
  firstName?: string,
  lastName?: string
  email?: string
  phone?: string
  avatar?: string
  createdDate?: Date
  deletedDate?: Date
  properties?: Property[]


} 
