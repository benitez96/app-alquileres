import express, { Express } from 'express';
import logger from 'morgan';
import cors from 'cors';
import "reflect-metadata"
import dotenv from 'dotenv';
import { DataSource } from "typeorm"
import path from 'path';

dotenv.config();


export const db = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [
    '../models/*.{ts,js}',
    path.join(__dirname, '../models/*.{ts,js}')
  ],
  migrations: [],
  subscribers: [],
})

export default (app: Express) => {

  app.disable('x-powered-by')
  app.set('env', process.env.NODE_ENV)

  if (process.env.NODE_ENV !== 'test')
    app.use(logger('dev'))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())

  db.initialize()
    .then(() => console.log('Database initializated'))
    .catch(err => console.error('Error during database initialization: ', err))
}
