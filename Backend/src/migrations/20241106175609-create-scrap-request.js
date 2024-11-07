'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ScrapRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Reference to Users table
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      scrapDealerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ScrapDealers', // Reference to ScrapDealers table
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      billId: {
        type: Sequelize.INTEGER,
        allowNull: true, // Allow null as the bill might not be created immediately
        references: {
          model: 'Bills', // Reference to Bills table
          key: 'id',
        },
        onDelete: 'SET NULL',  // If a Bill is deleted, set billId to NULL
        onUpdate: 'CASCADE',
      },
      pickupDateTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('pending', 'completed', 'cancelled'),
        defaultValue: 'pending',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ScrapRequests');
  }
};