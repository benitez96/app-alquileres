import express, { Request, Response } from 'express';
import { createUser, getUser, getUsers, updateUser } from '../controllers/user';
import { authenticate } from '../middlewares/authenticate';


const router = express.Router()


router
  .get('/', getUsers)
  .post('/', createUser)
  .get('/:id', getUser)
  .put('/:id', [authenticate], updateUser)


export default router
