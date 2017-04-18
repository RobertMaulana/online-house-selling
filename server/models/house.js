'use strict';
module.exports = function(sequelize, DataTypes) {
  var house = sequelize.define('house', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    address: DataTypes.TEXT,
    price: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return house;
};
