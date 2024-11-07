'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScrapDealer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
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
    name:{
      type : DataTypes.STRING ,
      allowNull : false ,
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
      type: DataTypes.STRING, // Storing locations as JSONB (array of strings)
      allowNull: true,
    },
    status : {
      type : DataTypes.STRING ,
    }
  }, {
    sequelize,
    modelName: 'ScrapDealer',
  });
  return ScrapDealer;
};