import path from "path";
import { DataSource } from "typeorm";
import dotenv from 'dotenv';

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
