import { Request, Response } from "express";
import { insertUser } from "../services/user";


export const createUser = (req: Request, res: Response) => {

  try {
    const { user } = req.body;

    const newUser = insertUser(user)
    console.log(newUser)

    res.status(201).send(newUser)
  } catch (e) {
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
