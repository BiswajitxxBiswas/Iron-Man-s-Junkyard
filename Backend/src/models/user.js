'use strict';
const { ServerConfig } = require("../config") ;
const bcrypt = require("bcrypt") ;
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.ScrapRequest , {
        foreignKey : "userId" ,
        sourceKey : 'id' ,
        onDelete:"CASCADE" ,
      }) ;

      this.belongsToMany(models.ScrapDealer, {
        through: 'UserScrapDealers',
        foreignKey: 'userId',
        otherKey: 'scrapDealerId',
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,  // Allow null since social logins won't have a password
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    socialLogin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,  // Google ID will be null if the user hasn't logged in with Google
    },
    facebookId: {
      type: DataTypes.STRING,
      allowNull: true,  // Facebook ID will be null if the user hasn't logged in with Facebook
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  // User.beforeCreate(function encrypt(user){ // user is the js User object (that is input given by the user)
  //   console.log("password before encryption is -->" + user.password) ;
  //   const encryptedPassword = bcrypt.hashSync(user.password , +ServerConfig.SALT_ROUNDS) ; // this line is enough for encryption of the password 
  //   user.password = encryptedPassword ;
  //   console.log("password after encryption is -->" + user.password) ;
  // })
  return User;
};