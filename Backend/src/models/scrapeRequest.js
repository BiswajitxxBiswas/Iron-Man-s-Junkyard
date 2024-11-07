'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScrapRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey : 'id'
      });

      this.belongsTo(models.ScrapDealer, {
        foreignKey: 'scrapDealerId',
        targetKey : 'id' ,
      });

      this.hasOne(models.Bill, {
        foreignKey: 'billId', 
      });

    }
  }
  ScrapRequest.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scrapDealerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pickupDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
      defaultValue: 'pending',
    },
    billId: { 
      type: DataTypes.INTEGER,
      references: {
        model: 'Bills',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'ScrapRequest',
  });
  return ScrapRequest;
};