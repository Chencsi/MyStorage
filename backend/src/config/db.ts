import { createPool } from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

export const connection = createPool({
    host: '127.0.0.1',
    port: process.env.MYSQLDB_DOCKER_PORT,
    user: process.env.MYSQLDB_USER  as string,
    password: process.env.MYSQLDB_ROOT_PASSWORD  as string,
    database: process.env.MYSQLDB_DATABSE as string
});