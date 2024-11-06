'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BillItem.belongsTo(models.Bill, {
        foreignKey: 'billId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      BillItem.belongsTo(models.ScrapeItem, {
        foreignKey: 'scrapeItemId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  BillItem.init({
    billId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scrapItemId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BillItem',
  });
  return BillItem;
};