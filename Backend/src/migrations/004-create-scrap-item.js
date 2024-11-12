'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ScrapItems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      scrapDealerId: {
        type: Sequelize.INTEGER, // Foreign key to ScrapDealers table
        allowNull: false, // Ensure it's required
        references: {
          model: 'ScrapDealers', // Refers to the ScrapDealers table
          key: 'id', // Refers to the id column in ScrapDealers
        },
      },
      imageUrl: {
        type: Sequelize.STRING, // URL of the image
        allowNull: true, // Allows it to be nullable if no image is provided
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, // Set default value to the current time
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, // Set default value to the current time
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ScrapItems');
  }
};
