import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database'; // Assuming you have a database connection setup

// User model
export class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
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
    sequelize,
    tableName: 'users',
  }
);

// Opportunity model
export class Opportunity extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public link!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Opportunity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'opportunities',
  }
);

// Exporting models
export default {
  User,
  Opportunity,
};