import { db } from "../configs";
import { User } from "../models/user";

export const insertUser = async( user: User ) => {

  const newUser = await db
    .createQueryBuilder()
    .insert()
    .into( User )
    .values( user )
    .execute()

  console.log('newUser', newUser)

  return newUser

}
