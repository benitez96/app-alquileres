import { db } from "../configs/database.config";
import { User } from "../models/user";

const userRepository = db.getRepository(User)


export const getUsers = async () => await userRepository.find()

export const getUserById = async (id: number) => await userRepository.findOneBy({ id })

export const getUserByLogin = async (login: string) => await userRepository.findOneBy({ login })

export const insertUser = async (user: User) => await userRepository.save(user)

export const updateUser = async (id: number, user: User) => await userRepository.update(id, user)
