'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Bill extends Model {
    static associate(models) {
      Bill.belongsTo(models.ScrapRequest, {
        foreignKey: 'scrapRequestId',
      });
    }
  }

  Bill.init({
    id: {
      type: DataTypes.INTEGER,  // Integer Primary Key with Auto-Increment
      autoIncrement: true,
      primaryKey: true,
    },
    scrapRequestId: {
      type: DataTypes.INTEGER,  // Integer Foreign Key
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    items: {
      type: DataTypes.JSON,  // Store the array of objects as JSON
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Bill',
  });

  return Bill;
};
