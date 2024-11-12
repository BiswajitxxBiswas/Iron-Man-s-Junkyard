'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScrapItem extends Model {
    static associate = (models) => {
      this.belongsTo(models.ScrapDealer, {
        foreignKey: "scrapDealerId",
        targetKey: "id",
      });
    };

  }
  ScrapItem.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, // To ensure name is not null
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false, // To ensure price is not null
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false, // To ensure quantity is not null
    },
    scrapDealerId: {
      type: DataTypes.INTEGER, // Foreign key to ScrapDealers table
      allowNull: true, // Ensure it's required
      references: {
        model: 'ScrapDealers', // Refers to the ScrapDealers table
        key: 'id', // Refers to the id column in ScrapDealers
      },
    },
  }, {
    sequelize,
    modelName: 'ScrapItem',
    timestamps: true,
  });
  return ScrapItem;
};