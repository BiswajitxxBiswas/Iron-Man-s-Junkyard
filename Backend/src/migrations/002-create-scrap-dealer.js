'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ScrapDealers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNo: {
        type: Sequelize.STRING, // Allows various phone number formats
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'other'),
        allowNull: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pincode: {
        type: Sequelize.STRING, // String to handle various postal code formats
        allowNull: true,
      },
      operationalLocations: {
        type: Sequelize.STRING, // Store locations as a comma-separated string or JSON (if needed)
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM('online', 'offline'),
        allowNull: false,
        defaultValue: 'offline',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ScrapDealers');
  }
};
