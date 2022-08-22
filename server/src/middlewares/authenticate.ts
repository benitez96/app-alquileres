import {NextFunction, Request, Response} from "express";
import moment from 'moment'

import { decodeJWT } from '../utils'


export const authenticate = (req: Request, res: Response, next: NextFunction) => {

  try{

    if ( !req.headers.authorization ) 
      return res.status(401).send({msg: 'Unauthorized'})

    const payload = decodeJWT(req.headers.authorization)

    if (!!payload.exp && payload.exp <= moment.now() )
      return res.status(400).send({ mgs: 'Expired token.' })

    req.user = payload.user

  }catch(e){
    return res.status(401).send({ msg: 'Unauthorized' })
  }

  next()
}
