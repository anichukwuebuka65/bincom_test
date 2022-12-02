import { Sequelize, DataTypes } from "sequelize";

require("dotenv").config();

const conn = new Sequelize(
  "bincomphptest", //process.env.DATABASE_NAME,
  "root", //process.env.DATABASE_USERNAME,
  "", //process.env.DATABASE_PASSWORD,
  {
    host: "localhost", //process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);
// const conn = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

conn
  .authenticate()
  .then((data) => console.log("connected"))
  .catch((error) => console.log("the error is THAT" + error));

module.exports = {
  conn,
  DataTypes,
};
