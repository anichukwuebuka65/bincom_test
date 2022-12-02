import { Sequelize, DataTypes } from "sequelize";

require("dotenv").config();

const conn = new Sequelize("sql7582256", "sql7582256", "kY7VsUSHfa", {
  host: "sql7.freemysqlhosting.net",
  dialect: "mysql",
});
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

export { conn, DataTypes };
