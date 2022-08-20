import express, { Request, Response } from 'express';
import { createUser } from '../controllers/user';
import { authenticate } from '../middlewares/authenticate';


const router = express.Router()


router
  .get('/', [authenticate], (req: Request, res: Response) => {
    res.json({ value: 'Hola mundo' })
  })
  .post('/', createUser)


export default router
