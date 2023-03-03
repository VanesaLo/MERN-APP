import { createPool } from "mysql2/promise";

export const pool = createPool({
  //conectando la base de datos mysql
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "taskdb",
});
