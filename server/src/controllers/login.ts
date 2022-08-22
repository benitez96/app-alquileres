import { Request, Response } from "express";
import { getUserByLogin } from '../services/user'
import { compare, signJWT } from "../utils";

export const login = async( req: Request, res: Response ) => {

  try{
    const { login, password } = req.body

    let userDB = await getUserByLogin( login )

    // validations
    if (!userDB) return res.status(400).send({ msg: "Invalid user or password" })
    const { password: hashedPassword, ...user } = userDB
    if (!await compare(password, hashedPassword)) return res.status(400).send({ msg: "Invalid user or password" })

    const token = signJWT( user );

    return res.status(202).send({ token })


  } catch (e) {
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
