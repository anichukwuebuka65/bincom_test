import { conn, DataTypes } from "../database";

export const PuResult = conn.define(
  "announced_pu_results",
  {
    result_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
    },
    polling_unit_uniqueid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "polling_unit",
        key: "uniqueid",
      },
    },
    party_abbreviation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    party_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
