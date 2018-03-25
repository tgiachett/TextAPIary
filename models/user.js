"use strict";

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: DataTypes.STRING
  }, 
  {
    classMethods: {
      associate: (models) => {
        models.User.hasMany(models.Entry);
      }
    }
  });
  return User;
};