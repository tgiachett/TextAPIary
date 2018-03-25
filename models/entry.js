"use strict";

module.exports = function(sequelize, DataTypes) {
  const Entry = sequelize.define("Entry", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, 
  {
    classMethods: {
      associate: (models) => {
        Entry.belongsTo(models.User);
      }
    }
  });
  return Entry;
};