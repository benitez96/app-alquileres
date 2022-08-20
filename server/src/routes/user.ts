import express, { Request, Response } from 'express';
import { authenticate } from '../middlewares/authenticate';


const router = express.Router()


router
  .get('/', [authenticate], (req: Request, res: Response) => {
    res.json({ value: 'Hola mundo' })
  })
  .post('/', (req, res) => res.json(req.body))


export default router
