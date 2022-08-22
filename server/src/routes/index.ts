import { Express } from 'express';

import userRouter from './user';
import loginRouter from './login'


export default (app: Express) => {
  app.use('/user', userRouter)
  app.use('/login', loginRouter)
}
