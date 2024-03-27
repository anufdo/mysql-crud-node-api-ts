import { Sequelize } from "sequelize-typescript";
import { appEnv } from "../config/env";
import { Dialect } from "sequelize";
import { User } from "../models/User";

const sequelize = new Sequelize({
  database: appEnv.database.DB_NAME,
  host: appEnv.database.DB_HOST,
  username: appEnv.database.DB_USER,
  password: appEnv.database.DB_PASSWORD,
  dialect: appEnv.database.DB_DIALECT as Dialect,

  models: [User],
});

export default sequelize;
