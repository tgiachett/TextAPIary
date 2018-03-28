// load environmental variables
require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASS,
    database: "entries_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.DB_PASS,
    database: "localhost",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
