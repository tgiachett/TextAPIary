"use strict";

module.exports = function(sequelize, DataTypes) {
  const Entry = sequelize.define("Entry", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comBody: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Public"
    },
    tbl: {
      type: DataTypes.STRING,
      alloNull: false
    },
    tblPass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SmsSid: {
      type: DataTypes.STRING,
      alloNull: false
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wholeBody: {
      type: DataTypes.TEXT
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