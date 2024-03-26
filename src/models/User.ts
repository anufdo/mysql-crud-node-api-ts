import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";

interface UserAttributes {
  id?: number;
  username: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Specify the Sequelize instance
    timestamps: true,
    modelName: "User", // Optional: You can set a model name here
  }
);

export default User;
