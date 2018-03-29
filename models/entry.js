"use strict";

module.exports = function(sequelize, DataTypes) {
  const Entry = sequelize.define("Entry", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comBody: {
      type: DataTypes.TEXT,
      alloNull: false,
      validate: { len: [1] },
      description: DataTypes.TEXT
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
      type: DataTypes.INT,
      allowNull: false
    },
    wholeBody: {
      type: DatTypes.TEXT
    },


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