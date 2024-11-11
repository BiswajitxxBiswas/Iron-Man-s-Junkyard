'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserScrapDealerFeedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */  
    static associate(models) {
      // Associating UserScrapDealerFeedback with ScrapDealer
      this.belongsTo(models.ScrapDealer, {
        foreignKey: 'scrapDealerId',
        onDelete: 'CASCADE', // Deletes feedback if scrap dealer is deleted
      });

      // Associating UserScrapDealerFeedback with User (Customer)
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });

      // Associating UserScrapDealerFeedback with ScrapRequest (optional)
      this.belongsTo(models.ScrapRequest, {
        foreignKey: 'scrapRequestId',
        onDelete: 'CASCADE',
      });
    }
  }

  UserScrapDealerFeedback.init(
    {
      scrapDealerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scrapRequestId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'UserScrapDealerFeedback',
    }
  );

  return UserScrapDealerFeedback;
};
