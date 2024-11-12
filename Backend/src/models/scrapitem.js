'use strict';
const { Model } = require('sequelize');

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
      allowNull: false, // Ensures name is not null
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false, // Ensures price is not null
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false, // Ensures quantity is not null
    },
    scrapDealerId: {
      type: DataTypes.INTEGER, // Foreign key to ScrapDealers table
      allowNull: true, // Allows it to be nullable if necessary
      references: {
        model: 'ScrapDealers', // Refers to the ScrapDealers table
        key: 'id', // Refers to the id column in ScrapDealers
      },
    },
    imageUrl: {
      type: DataTypes.STRING, // URL of the image
      allowNull: true, // Allows it to be nullable if no image is provided
    },
  }, {
    sequelize,
    modelName: 'ScrapItem',
    timestamps: true,
  });

  return ScrapItem;
};
