import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { config } from "../config";
dotenv.config();

//TODO: check if params can be made a better type
export async function query(sql: string, params?: any) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results;
}
