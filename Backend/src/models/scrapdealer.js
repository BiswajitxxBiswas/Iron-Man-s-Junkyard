'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ScrapDealer extends Model {
    static associate(models) {
      // define association here
      // In ScrapDealer model
      this.hasMany(models.ScrapItem, {
        foreignKey: "scrapDealerId",
        sourceKey: "id",
        onDelete: "CASCADE",
      });

      this.hasMany(models.ScrapRequest , {
        foreignKey : "scrapDealerId" ,
        sourceKey : "id" ,
        onDelete : "CASCADE"
      })

      this.belongsToMany(models.User, {
        through: 'UserScrapDealers',
        foreignKey: 'scrapDealerId',
        otherKey: 'userId',
      });
    }
  }

  ScrapDealer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operationalLocations: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('online', 'offline'),
      allowNull: false,
      defaultValue: 'offline',
    },
  }, {
    sequelize,
    modelName: 'ScrapDealer',
  });

  return ScrapDealer;
};
