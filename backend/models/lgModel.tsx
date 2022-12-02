import { conn, DataTypes } from "../database";

export const localGov = conn.define(
  "lga",
  {
    uniqueid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lga_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lga_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lga_description: {
      type: DataTypes.STRING,
    },
    entered_by_user: {
      type: DataTypes.STRING,
    },
    date_entered: {
      type: DataTypes.STRING,
    },
    user_ip_address: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
