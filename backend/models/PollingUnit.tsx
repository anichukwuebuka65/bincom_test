import { conn, DataTypes } from "../database";

export const PollingUnit = conn.define(
  "polling_unit",
  {
    uniqueid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    polling_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ward_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lga_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uniquewardid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    polling_unit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    polling_unit_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    polling_unit_description: {
      type: DataTypes.INTEGER,
    },
    lat: {
      type: DataTypes.INTEGER,
    },
    long: {
      type: DataTypes.INTEGER,
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
