'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Bill belongs to ScrapRequest
      Bill.belongsTo(models.ScrapRequest, {
        foreignKey: 'scrapRequestId',
      });

    }
  }
  Bill.init({
    scrapRequestId: {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    totalAmount:{
      type : DataTypes.FLOAT,
      allowNull : false,
    },
    items: {
      type : DataTypes.JSON,
      allowNull : false,
    },
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};