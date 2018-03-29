"use strict";

module.exports = function(sequelize, DataTypes) {
  const Entry = sequelize.define("Entry", {
    body: {
      type: DataTypes.TEXT,
      alloNull: false,
      validate: { len: [1] },
      description: DataTypes.TEXT
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Public"
    }
  }, 
  {
    classMethods: {
      associate: (models) => {
        models.Entry.belongsTo(models.User);
      }
    }
  });
  return Entry;
};