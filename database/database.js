// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node_schema",
//   password: "Prayank@10201",
// });
// module.exports = pool.promise();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("node_schema", "root", "Prayank@10201", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = { sequelize: sequelize, DataTypes: DataTypes };
