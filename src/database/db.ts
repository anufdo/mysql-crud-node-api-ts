import { Sequelize, Model, DataTypes } from "sequelize";
import { appEnv } from "../config/env";

// Replace with your actual database connection details
const sequelize = new Sequelize(appEnv.database.DB_NAME, appEnv.database.DB_USER, appEnv.database.DB_PASSWORD, {
  host: appEnv.database.DB_HOST,
  dialect: "mysql",
});

export default sequelize;
