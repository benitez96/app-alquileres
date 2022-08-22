import { Request, Response } from "express";
import * as userService from "../services/user";
import { encrypt } from "../utils";


export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(Number(id))

    console.log(user)

    if (!user) {
      return res.status(404).send({ msg: 'User not found' })
    }

    res.status(200).send(user)

  } catch (e) {
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}

export const getUsers = async (_: any, res: Response) => {
  try {

    const user = await userService.getUsers();

    if (!user) {
      return res.status(404).send('User not found')
    }

    res.status(200).send(user)

  } catch (e) {
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}

export const createUser = async (req: Request, res: Response) => {

  try {

    const user = req.body;

    user.password = await encrypt(user.password)
    const newUser = await userService.insertUser(user);

    res.status(201).send(newUser)

  } catch (e) {
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}


export const updateUser = async (req: Request, res: Response) => {
  try {

    const id = req.user?.id;
    const user = req.body;

    if (!await userService.getUserById(Number(id))) {
      return res.status(404).send({ msg: 'User not found' })
    }

    const userUpdated = await userService.updateUser(Number(id), user)

    res.status(200).send(userUpdated)

  } catch (e) {
    res.status(500).send({ msg: 'Error produced during petition' })
  }

}
