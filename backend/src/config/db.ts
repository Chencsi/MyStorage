import { Database } from '../model/types';
import { createPool } from 'mysql2';
import { Kysely, MysqlDialect } from 'kysely';
import dotenv from "dotenv";

dotenv.config();

const dialect = new MysqlDialect({
    pool: createPool({
        database: process.env.MYSQLDB_DATABASE as string,
        host: 'mysql_db' as string,
        user: process.env.MYSQLDB_USER  as string,
        password: process.env.MYSQLDB_ROOT_PASSWORD  as string,
        port: checkPort(process.env.MYSQLDB_DOCKER_PORT) as number
    })
});

function checkPort(port: string | undefined): number {
    if (port !== undefined) {
        try {
            parseInt(port);
        }
        catch (error) {
            console.log(error);
            return 3306;
        }
        return parseInt(port);
    } else {
        console.log("PORT is undefined, the new port is: 3306");
        return 3306;
    }
}

export const db = new Kysely<Database>({
    dialect
});