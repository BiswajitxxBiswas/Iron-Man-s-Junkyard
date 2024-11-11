'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScrapItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  ScrapItem.init({
    name: {
      type : DataTypes.STRING,
    },
    price: {
      type : DataTypes.FLOAT,
    },
  }, {
    sequelize,
    modelName: 'ScrapItem',
  });
  return ScrapItem;
};