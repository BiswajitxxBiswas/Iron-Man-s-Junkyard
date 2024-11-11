'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ScrapDealer extends Model {
    static associate(models) {
      // Define associations here
      this.hasMany(models.ScrapRequest, {
        foreignKey: 'scrapDealerId',
        sourceKey: 'id',
        onDelete: 'CASCADE',
      });

      this.belongsToMany(models.User, {
        through: 'UserScrapDealers',
        foreignKey: 'scrapDealerId',
        otherKey: 'userId',
      });

      this.hasMany(models.UserScrapDealerFeedback, {
        foreignKey: 'scrapDealerId',
        onDelete: 'CASCADE',
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
    phoneNo: {
      type: DataTypes.STRING, // Changed to STRING to accommodate phone numbers
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pincode: {
      type: DataTypes.STRING, // STRING to accommodate different postal code formats
      allowNull: true,
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
