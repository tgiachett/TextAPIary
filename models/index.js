
"use strict";

const fs = require("fs"),
	path = require("path"),
	Sequelize = require("sequelize");

const basename = path.basename(module.filename),
	env = process.env.NODE_ENV || "development",
	config = require(__dirname + "/../config/config.js")[env];

const db = {};

let sequelize;

if(process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     8080,
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if(db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;